import React from 'react';
import {createMessage, destroyMessage} from '../../util/message_api_util';
import Message from './message';
import consumer from '../../consumer';

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            // usersInRoom: {}
        };

        this.activeMessage = React.createRef();
        this.messageUl = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.scrollToMessage = this.scrollToMessage.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this)

        this.reactionTimeouts = {};
    }

    componentDidMount() {
        this.enterRoom();
    }

    enterRoom() {
        const { fetchRoom, roomId } = this.props;

        fetchRoom(roomId).then((usersInRoom = {}) => {
            // this.setState({ usersInRoom });

            if (this.activeMessage.current) {
                this.scrollToMessage();
            } else {
                this.scrollToBottom();
            }
        });

        this.subscription = consumer.subscriptions.create(
            { channel: 'RoomsChannel', id: roomId },
            {
                received: ({ type, message, user, id, reaction }) => {
                    console.log('Room action type: ', type);
                    // const { usersInRoom } = this.state;
                    switch (type) {
                        case 'RECEIVE_MESSAGE':
                            this.props.receiveMessage(message);
                            this.props.receiveMsgUser(user);
                            break;
                        case 'DESTROY_MESSAGE':
                            this.props.removeMessage(id);
                            break;
                        // case 'RECEIVE_ROOM_USER':
                        //     this.setState({ usersInRoom: { ...usersInRoom, [user.id]: user } });
                        //     console.log("Room state is", this.state)
                        //     break;
                        // case 'REMOVE_ROOM_USER':
                        //     const { [id]: _removed, ...remainingUsers } = usersInRoom;
                        //     this.setState({ usersInRoom: remainingUsers });
                        //     console.log("Left room state is", this.state)
                        //     break;
                        // case 'RECEIVE_REACTION':
                        //     window.clearTimeout(this.reactionTimeouts[id]);
                        //     this.setReaction(id, reaction);
                        //     this.reactionTimeouts[id] = window.setTimeout(() => {
                        //         this.setReaction(id, null);
                        //     }, 4000);
                        //     break;
                        default:
                            console.log('Unhandled broadcast: ', type);
                            break;
                    }
                }
            }
        );
    }

    componentDidUpdate({
        roomId: prevRoomId,
        location: { hash: prevHash },
        messages: { length: prevNumMessages }
    }) {
        const {
            roomId: curRoomId,
            location: { hash: curHash },
            messages: { length: curNumMessages }
        } = this.props;

        if (prevRoomId !== curRoomId) {
            this.subscription?.unsubscribe();
            this.enterRoom();
        } else if (this.activeMessage.current && prevHash !== curHash) {
            this.scrollToMessage();
        } else if (curNumMessages > prevNumMessages) {
            this.scrollToBottom();
        }
    }

    componentWillUnmount() {
        this.subscription?.unsubscribe();
    }

    scrollToMessage() {
        this.activeMessage.current.focus();
        this.activeMessage.current.scrollIntoView();
    }

    scrollToBottom() {
        if (this.messageUl.current){
            this.messageUl.current.scrollTop = this.messageUl.current.scrollHeight;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { roomId, currentUserId: senderId } = this.props;
        const { content } = this.state;
        const newMsg = { content, 
                        room_id: roomId, 
                        sender_id: senderId,
                        read_status: false }
        createMessage(newMsg).then(() => {
            this.setState({ content: '' });
        });
    }

    handleDelete(messageId) {
        destroyMessage(messageId);
    }

    // setReaction(id, reaction) {
    //     const { usersInRoom } = this.state;
    //     const newUser = { ...usersInRoom[id], reaction };
    //     this.setState({ usersInRoom: { ...usersInRoom, [id]: newUser } });
    // }

    // generateReactions(...reactions) {
    //     return reactions.map(reaction => (
    //         <span
    //             key={reaction}
    //             className='reaction'
    //             onClick={() => this.subscription.perform('react', { reaction })}
    //         >
    //             {reaction}
    //         </ span>
    //     ));
    // }

    render() {
        const { room, currentUserId, messages, location, users } = this.props;
        const activeMessageId = parseInt(location.hash.slice(1));
        // const usersInRoom = Object.values(this.state.usersInRoom);

        if(!room){return}

        let user;
        const otherOwners = room.owners.filter((ownerId) => (parseInt(ownerId) !== currentUserId))
        const otherUsers = otherOwners.map((owner_id) => {
            if (users[parseInt(owner_id)]) {
                return users[parseInt(owner_id)].firstName;
            } else {
                return "";
            }
        }).join(", ");

        if (otherOwners.length === 1 && users[parseInt(otherOwners[0])]) {
            user = users[parseInt(otherOwners[0])]
        } else {
            user = {
                firstName: `Group chat with ${otherUsers}`,
                headline: `You're in a group chart with ${otherUsers}`
            }
        }


        const msgList = messages.map((message, idx) => {
            if (message.senderId === currentUserId) {
                return (
                    <li key={idx} 
                        ref={activeMessageId === message.id && this.activeMessage}
                        tabIndex={-1}>
                            <Message m={message}  side="right"/>
                    </li>
                )
            } else {
                return (
                    <li key={idx} >
                        <Message m={message}  side="left" />
                    </li>
                )
            }
        })

        return (
                <div id="message-view" className="component">
                    <div className="headline-tag">
                    <div className="img" id="img-border">
                            <img src={user.headshotUrl ? user.headshotUrl : window.groupUrl} alt="" />
                        </div>
                        <div className="connection-title">
                            <h3>{user.firstName} {user.lastName}</h3>
                            <h4>{user.headline}</h4>
                        </div>
                    </div>
                    <div>
                        <ul ref={this.messageUl}>
                            {msgList}
                        </ul>
                    </div>
                    <div id="message-form">
                            <textarea
                                rows={this.state.content.split('\n').length}
                                onChange={e => this.setState({ content: e.target.value })}
                                onKeyDown={e => {
                                    if (e.code === 'Enter' && !e.shiftKey) {
                                        this.handleSubmit(e);
                                    }
                                }}
                                value={this.state.content}
                            />
                            <div className='message-controls'>
                                <button className='btn-primary' disabled={!this.state.content}
                                onClick={this.handleSubmit}>
                                    Send
                                </button>
                            </div>
                    </div>

                </div>
        
        );
    }
};

export default Room;

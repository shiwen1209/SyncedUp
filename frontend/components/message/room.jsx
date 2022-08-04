import React from 'react';
import { connect } from 'react-redux';
import { receiveMessage, removeMessage } from '../../actions/message_actions';
import { fetchRoom } from '../../actions/room_actions';
import { receiveMsgUser } from '../../actions/user_action';
import { createMessage, destroyMessage } from '../../util/message_api_util';
import Message from './message';
import consumer from '../../consumer';

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            usersInRoom: {}
        };

        this.activeMessage = React.createRef();
        this.messageUl = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.reactionTimeouts = {};
    }

    componentDidMount() {
        this.enterRoom();
    }

    enterRoom() {
        const { fetchRoom, roomId } = this.props;

        fetchRoom(roomId).then((usersInRoom = {}) => {
            this.setState({ usersInRoom });

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
                    console.log('Received message: ', message);
                    const { usersInRoom } = this.state;
                    switch (type) {
                        case 'RECEIVE_MESSAGE':
                            this.props.receiveMessage(message);
                            this.props.receiveMsgUser(user);
                            break;
                        case 'DESTROY_MESSAGE':
                            this.props.removeMessage(id);
                            break;
                        case 'RECEIVE_USER':
                            this.setState({ usersInRoom: { ...usersInRoom, [user.id]: user } });
                            break;
                        case 'REMOVE_USER':
                            const { [id]: _removed, ...remainingUsers } = usersInRoom;
                            this.setState({ usersInRoom: remainingUsers });
                            break;
                        case 'RECEIVE_REACTION':
                            window.clearTimeout(this.reactionTimeouts[id]);
                            this.setReaction(id, reaction);
                            this.reactionTimeouts[id] = window.setTimeout(() => {
                                this.setReaction(id, null);
                            }, 4000);
                            break;
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
        this.messageUl.current.scrollTop = this.messageUl.current.scrollHeight;
    }

    handleSubmit(e) {
        e.preventDefault();
        const { roomId, currentUserId: senderId } = this.props;
        const { content } = this.state;
        const newMsg = { content, 
                        room_id: roomId, 
                        sender_id: senderId,
                        recipient_id: 228,
                        read_status: false }
        createMessage(newMsg).then(() => {
            this.setState({ content: '' });
        });
    }

    handleDelete(messageId) {
        destroyMessage(messageId);
    }

    setReaction(id, reaction) {
        const { usersInRoom } = this.state;
        const newUser = { ...usersInRoom[id], reaction };
        this.setState({ usersInRoom: { ...usersInRoom, [id]: newUser } });
    }

    generateReactions(...reactions) {
        return reactions.map(reaction => (
            <span
                key={reaction}
                className='reaction'
                onClick={() => this.subscription.perform('react', { reaction })}
            >
                {reaction}
            </ span>
        ));
    }

    render() {
        const { room, currentUserId, messages, location } = this.props;
        const activeMessageId = parseInt(location.hash.slice(1));
        const usersInRoom = Object.values(this.state.usersInRoom);
        // debugger
        return (
            <>
                <section className='room home-section'>
                    <h1>{room?.name}</h1>

                    <ul ref={this.messageUl}>
                        {messages.map(message => (
                            <li
                                key={message.id}
                                ref={activeMessageId === message.id && this.activeMessage}
                                tabIndex={-1}
                            >
                                <Message {...message} />
                                {message.senderId === currentUserId && (
                                    <button
                                        className='btn-delete'
                                        onClick={() => this.handleDelete(message.id)}
                                    >
                                        x
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={this.handleSubmit}>
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
                            <div>
                                {this.generateReactions('👍', '❤️', '🔥', '😡')}
                            </div>
                            <button className='btn-primary' disabled={!this.state.content}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>
                <section className='online-users home-section'>
                    <h2>In Room</h2>
                    <ul >
                        {usersInRoom.map(({ id, email, reaction }) => (
                            <li key={id} className={currentUserId === id ? 'current' : ''}>
                                <span className='reaction'>{reaction}</span>
                                <span>{email}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        );
    }
};

const mapState = (state, ownProps) => {
    // debugger
    const roomId = ownProps.match.params.id;
    const messages = Object.values(state.entities.messages)
        .filter(message => message.roomId === parseInt(roomId))
        .map(message => ({
            ...message,
            sender: state.entities.users[message.senderId]?.email
        }))
        .sort(({ createdAt: timeA }, { createdAt: timeB }) => Math.sign(
            new Date(timeA).getTime() - new Date(timeB).getTime()
        ));

    return {
        currentUserId: state.session.id,
        messages,
        roomId,
        room: state.entities.rooms[parseInt(roomId)]
    };
};

export default connect(mapState, {
    fetchRoom,
    receiveMessage,
    removeMessage,
    receiveMsgUser
})(Room);
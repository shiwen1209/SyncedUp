import React from 'react';
import { createMessage, destroyMessage } from '../../util/message_api_util';


class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            searchValue: "",
            filteredResult: [],
            names: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addNames = this.addNames.bind(this);
        this.deleteName = this.deleteName.bind(this);
    }

    componentDidMount() {
        this.props.fetchRooms();
        this.props.fetchConnections(this.props.currentUserId);
    }

    handleUpdate(e) {
            const word = e.currentTarget.value.toLowerCase();
            this.setState({ searchValue: word })
        if (e.currentTarget.value.length > 0) {
            const resultList = this.props.connections.filter((person) => {
                const full_name = person.firstName.toLowerCase() + " " + person.lastName.toLowerCase()
                return full_name.includes(word)
            })
            this.setState({ filteredResult: resultList })
        } else {
            this.setState({ filteredResult: [] })
        }

    }

    addNames(person){
        // const name = fname + " " + lname
        if(!this.state.names.includes(person)){
            return (e) => this.setState({ names: [...this.state.names, person], filteredResult: [], searchValue: "" })
        }
    }

    deleteName(person){
        return(e)=>{
            const remainingNames = this.state.names.filter((name) => name !== person)
            this.setState({ names:  remainingNames })
        }
    }


    async handleSubmit(e){
        e.preventDefault();
        const { createRoom, currentUserId, rooms, receiveMsgUser } = this.props;
        const newRoomOwners = this.state.names.map((person)=> person.id.toString());
        newRoomOwners.push(currentUserId.toString());
        const userRoom = rooms.filter((room) => {
            return this.arrayEqual(room.owners, newRoomOwners)
        })

        if (userRoom.length === 1) {
            const newMsg = {
                content: this.state.content,
                room_id: userRoom[0].id,
                sender_id: currentUserId,
                read_status: false
            }
            await createMessage(newMsg);
            this.props.history.push(`/messaging/${userRoom[0].id}`);
        } else if (userRoom.length === 0) {
            await this.state.names.forEach((user) => receiveMsgUser(user));
            await createRoom({ owners: newRoomOwners});
            this.handleSubmit(e);
        } else {
            alert("error, please contact developer")
        } 
    }

    arrayEqual(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                return false
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (!arr1.includes(arr2[i])) {
                return false
            }
        }
        return true
    }

    render() {
        const searchResult = this.state.filteredResult.map((person, idx) => (
            <li key={idx} onClick={this.addNames(person)}>
                <div className="img">
                    <img src={person.headshotUrl} alt="" />
                </div>
                <div>
                    <h3>{person.firstName} {person.lastName}</h3>
                    <p>{person.headline}</p>
                </div>

            </li>
        ))

        const namesList = this.state.names.map((person, idx)=>(
            <div className='msg-name' key={idx} onClick={this.deleteName(person)}>
                <p>{person.firstName} {person.lastName}</p>
                <i className="fa-solid fa-x"></i>
            </div>
        ))

        return (
            <div id="message-view" className="component">
                <div className="create-room-header">
                    <div className="new-room-title">
                        <h3>New message</h3>
                    </div>
                </div>
                <div className="create-room-body">
                    <div className="new-room-input">
                        {this.state.names.length > 0 ? 
                        <div className='name-list'>
                            {namesList}
                        </div>
                        : <div></div>
                        }
                        <input type="text"
                            placeholder="Type a name or multiple names"
                            onChange={this.handleUpdate}
                            value={this.state.searchValue}
                         />
                    </div>
                
                
                    <ul id="create-room-list">
                        {searchResult}
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

export default CreateRoom;

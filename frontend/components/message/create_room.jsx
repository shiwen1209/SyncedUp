import React from 'react';
import SearchResultItem from "../search/search_result_item";


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
            return (e) => this.setState({ names: [...this.state.names, person], filteredResult: [] })
        }
    }

    deleteName(person){
        return(e)=>{
            const remainingNames = this.state.names.filter((name) => name !== person)
            this.setState({ names:  remainingNames })
        }
    }


    handleSubmit(){

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
            <div className='msg-name' key={idx}>
                <p>{person.firstName} {person.lastName}</p>
                <i className="fa-solid fa-x"
                    onClick={this.deleteName(person)}
                ></i>
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

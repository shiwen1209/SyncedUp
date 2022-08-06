import React from "react";
import ExpIndexContainer from "../experiences/exp_index_container";
import EduIndexContainer from "../experiences/edu_index_container";
import PeopleContainer from "./people_container";
import { Link } from "react-router-dom";
import PeopleListContainer from "./people_list_container";
import { withRouter } from 'react-router-dom';


class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.handleClickConnect = this.handleClickConnect.bind(this);
        this.handleClickDisconnect = this.handleClickDisconnect.bind(this);
        this.toggleDisplayDropdown = this.toggleDisplayDropdown.bind(this);
        this.state ={
            displayDropdown: false
        };
        this.createRoom = this.createRoom.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchRoomsNoUsers();
    }

    componentDidUpdate(prevProp) {
        if (prevProp.user !== undefined && (prevProp.user.id !== parseInt(this.props.match.params.userId))){
            this.props.fetchUser(this.props.match.params.userId)
        } 
    }

    handleClickConnect(e){
        const {currentUserId, user, createConnection, fetchUser} = this.props;
        const con1 = {"user1_id": currentUserId, "user2_id": user.id};
        const con2 = {"user1_id": user.id, "user2_id": currentUserId};
        createConnection(con1).then(createConnection(con2))
    }

    handleClickDisconnect(e){
        const {currentUserId, connections, deleteConnection, fetchUser} = this.props;
        const conId1 = connections[currentUserId].connectionId;
        const conId2 = connections[currentUserId].mirrorConnectionId;
        deleteConnection(conId1).then(deleteConnection(conId2))
    }

    toggleDisplayDropdown(e){
        if(this.state.displayDropdown){
            this.setState({ displayDropdown: false }) 
        } else {
            this.setState({ displayDropdown: true}) 
        }
        console.log(this.state)

    }

    createRoom(e) {
        e.preventDefault();
        const { createRoom, currentUserId, user, rooms} = this.props;
        const userRoom = rooms.filter((room)=>{
            const a = room.owners;
            const b = [currentUserId.toString(), user.id.toString()];
            const c = this.arrayEqual(room.owners, [currentUserId.toString(), user.id.toString()])
            return this.arrayEqual(room.owners, [currentUserId.toString(), user.id.toString()] )   
        })
        if(userRoom.length === 1){
            this.props.history.push(`/messaging/${userRoom[0].id}`);
        } else if (userRoom.length === 0) {
            createRoom({owners: [currentUserId, user.id]})
            .then(() => (this.createRoom(e)))
        } else {
            alert("error, please contact developer")
        } 
    }

    arrayEqual(arr1, arr2){
        for(let i=0; i< arr1.length; i++){
            if(!arr2.includes(arr1[i])){
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

    render(){
        const { user, currentUserId, connections, openModalPayload, closeModal} = this.props

        if(!user){return}
        return(
            <div id="user-profile">
                <div id="user-profile-main">
                    <div id="user-profile-summary" className="component">
                        <div id="user-profile-backgroundpic">
                            <img id="background-image" src="/assets/userbg3.webp" alt="" />
                        </div>
                        <div>   
                            <div>
                                <div id="user-profile-pic" className="img">
                                    <img id="headshot-image" src={user.headshotUrl} alt="" 
                                        onClick={(e) => { if(user.id === currentUserId){ return openModalPayload({ modal: 'editHeadshot', payload: this.props.user })}}
                                    }/>
                                </div>
                                <div>
                                    <span>{user.firstName} {user.lastName}</span>
                                    {user.pronouns ? <span>&nbsp;({user.pronouns})</span> : <span></span>}
                                </div>
                                <h3>{user.headline} </h3>
                                <h4>{user.locationCity}{user.locationCity && (user.locationState || user.locationCountry ) ? ", " : ""}
                                    {user.locationState}{user.locationState && (user.locationCountry) ? ", " : ""}
                                    {user.locationCountry}</h4>
                                {user.id === currentUserId ?
                                    <Link to='/mynetwork' className="link"> 
                                    <h4 className="connection-link">{user.numConnections} connections</h4>
                                    </Link> : 
                                    <div className="link">
                                        <h4 className="connection-link">{user.numConnections} connections</h4>
                                    </div>}
                                {user.id === currentUserId ? 
                                    <div>
                                        <button onClick={this.toggleDisplayDropdown}
                                        className="session-button">Add Profile Section</button>
                                        <button className="session-button">More</button>
                
                                        {this.state.displayDropdown ? 
                                        <div className="dropdown-buttons" onClick={(e)=> this.setState({displayDropdown: false})}>
                                                <div onClick={(e) =>
                                                    openModalPayload({ modal: 'createExp', payload: "work" })} >
                                                    <div className="icon">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </div>
                                                    <h4>Add experience</h4>
                                                </div>
                                                <div onClick={(e) =>openModalPayload({ modal: 'createExp', payload: "school" })}>
                                                    <div className="icon">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </div>
                                                    <h4>Add education</h4>
                                                </div>   
                                        </div> : <div></div>
                                        }
                                    </div> :
                                    <div>
                                        {currentUserId in connections ? 
                                        <button onClick={this.handleClickDisconnect} className="session-button">Disconnect</button>
                                        : <button onClick={this.handleClickConnect} className="session-button">Connect</button>}
                                        
                                        <button className="session-button" onClick={this.createRoom}>Message</button>
                                    </div>
                                    }

                    
                            </div>
                            {user.id === currentUserId ? 
                            <div className="icon" id="this-icon" onClick={(e) => openModalPayload({ modal: 'updateUser', payload: this.props.user })}>
                                <i className="fa-solid fa-pen"></i>
                            </div> : <div></div>
                            }
                        </div>

                    </div>

                    {user.about ? 
                        <div id="user-profile-about" className="component">
                            <div className="component-title">
                                <h2>About</h2>
                                {user.id === currentUserId ?
                                <div className="icon" onClick={(e) => openModalPayload({ modal: 'updateAbout', payload: this.props.user })}>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                : <div></div>}
                            </div>
                            <div className="component-body">
                                <p>
                                    {user.about}
                                </p>
                            </div>

                        </div> :
                        
                        <div></div>
                    }
                    


                    <ExpIndexContainer user={user} currentUserId={currentUserId}/>
                    <EduIndexContainer user={user} currentUserId={currentUserId} />

                </div>

                <div id="user-profile-other" className="component">
                    <div className="component-title">
                        <h3>Discover who's on Syncedup</h3>
                        <p>Recommended for you</p>
                    </div>
                    <PeopleListContainer />
                </div>
            </div>
        )
    }

}

export default withRouter(UserProfile);
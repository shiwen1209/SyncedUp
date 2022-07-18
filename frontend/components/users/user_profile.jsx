import React from "react";
import ExpIndexContainer from "../experiences/exp_index_container";
import EduIndexContainer from "../experiences/edu_index_container";


class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.handleClickConnect = this.handleClickConnect.bind(this);
        this.handleClickDisconnect = this.handleClickDisconnect.bind(this)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProp) {
        if (prevProp.user !== undefined && (prevProp.user.id !== parseInt(this.props.match.params.userId))){
            this.props.fetchUser(this.props.match.params.userId)
        } 
    }

    handleClickConnect(e){
        const {currentUserId, user, createConnection } = this.props;
        const con1 = {"user1_id": currentUserId, "user2_id": user.id};
        const con2 = {"user1_id": user.id, "user2_id": currentUserId};
        createConnection(con1);
        createConnection(con2);
    }

    handleClickDisconnect(e){
        const {currentUserId, connections, deleteConnection} = this.props;
        const conId1 = connections[currentUserId].connectionId;
        const conId2 = connections[currentUserId].mirrorConnectionId;
        deleteConnection(conId1);
        deleteConnection(conId2);
    }

    render(){
        const { user, currentUserId, connections, openModalPayload} = this.props

        if(!user){return}

        return(
            <div id="user-profile">
                <div id="user-profile-main">
                    <div id="user-profile-summary" className="component">
                        <div id="user-profile-backgroundpic">
                            profile background picture placeholder
                        </div>
                        <div>   
                            <div>
                                <div>
                                    <span>{user.firstName} {user.lastName}</span><span>({user.pronouns})</span>
                                </div>
                                <h3>{user.headline} </h3>
                                <h4>{user.locationCity}{user.locationCity && (user.locationState || user.locationCountry ) ? ", " : ""}
                                    {user.locationState}{user.locationState && (user.locationCountry) ? ", " : ""}
                                    {user.locationCountry}</h4>
                                <h4>{user.numConnections} connections</h4>
                                {user.id === currentUserId ? 
                                    <div>
                                        <button className="session-button">Add Profile Section</button>
                                        <button className="session-button">More</button>
                                    </div> :
                                    <div>
                                        {currentUserId in connections ? 
                                        <button onClick={this.handleClickDisconnect}
                                        className="session-button">Disconnect</button>
                                        : <button onClick={this.handleClickConnect}
                                        className="session-button">Connect</button>
                                        }
                                        
                                        <button className="session-button">Message</button>
                                    </div>
                                    }
                            </div>
                            {user.id === currentUserId ? 
                            <div>
                                <i className="fa-solid fa-pen"
                                        onClick={(e) => openModalPayload({ modal: 'updateUser', payload: this.props.user })}
                                ></i>
                            </div> : <div></div>
                            }
                        </div>

                    </div>

                    {user.about ? 
                        <div id="user-profile-about" className="component">
                            <div className="component-title">
                                <h1>About</h1>
                                {user.id === currentUserId ?
                                    <i className="fa-solid fa-pen"
                                    onClick={(e) => openModalPayload({ modal: 'updateAbout', payload: this.props.user })}></i>
                                : <div></div>}
                            </div>
                            <p>
                                {user.about}
                            </p>
                        </div> :
                        
                        <div></div>
                    }
                    


                    <ExpIndexContainer user={user} currentUserId={currentUserId}/>
                    <EduIndexContainer user={user} currentUserId={currentUserId} />

                </div>
                <div id="user-profile-other">

                </div>
            </div>
        )
    }

}

export default UserProfile;
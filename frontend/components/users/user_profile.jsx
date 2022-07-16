import React from "react";
import ExpIndexContainer from "../experiences/exp_index_container";
import EduIndexContainer from "../experiences/edu_index_container";


class UserProfile extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProp) {
        if (prevProp.user !== undefined && (prevProp.user.id !== parseInt(this.props.match.params.userId))){
            this.props.fetchUser(this.props.match.params.userId)
        } 
    }

    render(){
        const { user, currentUserId, openModalPayload } = this.props

        if(!user){return(
            <h1 className="test">User does not exist</h1>
        )
        }

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
                                <h4>500 connections</h4>
                                {user.id === currentUserId ? 
                                    <div>
                                        <button className="session-button">Add Profile Section</button>
                                        <button className="session-button">More</button>
                                    </div> :
                                    <div>
                                        <button className="session-button">Connect</button>
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
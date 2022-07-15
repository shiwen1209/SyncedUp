import React from "react";
import ExpIndexContainer from "../experiences/exp_index_container"

class UserProfile extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
    }

    render(){
        const { user, currentUserId } = this.props

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
                                <h4>{user.locationCity}, {user.locationCountry} </h4>
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
                                    <i className="fa-solid fa-pen"></i>
                            </div> : <div></div>
                            }
                        </div>

                    </div>

                    {user.about ? 
                        <div id="user-profile-about" className="component">
                            <div>
                                <h1>About</h1>
                                {user.id === currentUserId ?
                                        <i className="fa-solid fa-pen"></i>
                                    : <div></div>}
                            </div>
                            <p>
                                {user.about}
                            </p>
                        </div> :
                        
                        <div></div>
                    }
                    


                    <ExpIndexContainer />

                    <div id="user-profile-education" className="component">

                    </div>

                </div>
                <div id="user-profile-other">

                </div>
            </div>
        )
    }

}

export default UserProfile;
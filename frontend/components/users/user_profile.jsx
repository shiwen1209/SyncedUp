import React, { useReducer } from "react";

class UserProfile extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
    }

    render(){
        // debugger
        const { user, currentUserId } = this.props
        // console.log("USER PROFILE PAGE")
        // console.log(this.props)
        // console.log(this.props.user)
        // console.log(this.props.user.firstName)

        
        return(
            <div id="user-profile">
                <div id="user-profile-main">
                    <div id="user-profile-summary" className="component">
                        <div id="user-profile-backgroundpic">
                            profile background picture placeholder
                        </div>
                        <div>
                            <div>
                                <span>{user.firstName} {user.lastName}</span><span>({user.pronouns})</span>
                                <h3>{user.headline} </h3>
                                <h4>{user.locationCity}, {user.locationCountry} </h4>
                                <h4>500 connections</h4>
                                <div>
                                    <button className="session-button">Connect</button>
                                    <button className="session-button">Message</button>
                                </div>

                            </div>

                            {user.id === currentUserId ? 
                            <div>
                                    <i className="fa-solid fa-pen"></i>
                            </div> : <div></div>
                            }
            


                        </div>

                    </div>

                    <div id="user-profile-about" className="component">

                    </div>

                    <div id="user-profile-experience" className="component">

                    </div>

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
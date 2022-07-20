import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import { Link } from "react-router-dom";

class UserFeed extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id)
    }

    render(){
        const {user, posts} = this.props
        return(
            <div id="user-feed">
                <div id="user-feed-profile">
                    <div id="user-feed-profile-summary" className="component">
                        <div id="user-profile-backgroundpic">
                            <img id="background-image" src="https://media-exp2.licdn.com/dms/image/C5616AQEwZ6A6A1tmxQ/profile-displaybackgroundimage-shrink_350_1400/0/1658203353167?e=1663804800&v=beta&t=QbWxVweNYHnPBOFJgs4mTGulaXDUabgG08tESVl-ixQ" alt="" />
                        </div>
                        <div>
                            <Link to={`/users/${user.id}`}>
                                <div className="img">
                                    <img src={user.headshotUrl} alt="headshot" />
                                </div>
                            </Link>
                            <Link to={`/users/${user.id}`}>
                                <h1>{user.firstName} {user.lastName}</h1>
                            </Link>
                        
                                <h2>{user.headline} </h2>
                                <p>{user.locationCity}{user.locationCity && (user.locationState || user.locationCountry) ? ", " : ""}
                                    {user.locationState}{user.locationState && (user.locationCountry) ? ", " : ""}
                                    {user.locationCountry}</p>
                                <br />  
                                <h3>{user.numConnections} connections</h3>
                          
                            
                        </div>
                       
                    </div>
                    <div className="component">
                        user tags
                    </div >
                </div>

                <div id="user-feed-posts">
                    <PostIndexContainer posts={posts} />
                </div>
         
                <div id="user-feed-other">
                    <div className="component">
                        SyncedUp News
                    </div>
                    <div className="component">
                        Promotions
                    </div>
                </div>

            </div>
        )
    }
}

export default UserFeed;
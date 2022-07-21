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
                            <img id="background-image" src="/assets/userbg3.webp" alt="" />
                        </div>
                        <div>
                            <Link to={`/users/${user.id}`}>
                                <div className="img">
                                    <img src={user.headshotUrl} alt="headshot" />
                                </div>
                            </Link>
                            <Link to={`/users/${user.id}`}>
                                <h1 className="text-link">{user.firstName} {user.lastName}</h1>
                            </Link>
                                <h2>{user.headline}</h2>
                                <p>{user.locationCity}{user.locationCity && (user.locationState || user.locationCountry) ? ", " : ""}
                                    {user.locationState}{user.locationState && (user.locationCountry) ? ", " : ""}
                                    {user.locationCountry}
                                </p>
                                <br /> 
                                <Link to='/mynetwork' className="link"> 
                                    <h3>{user.numConnections} connections</h3>
                                </Link>
                        </div>
                       
                    </div>
                    <div id= "tags" className="component">
                        <h3>Followed hashtags</h3>
                        <p>&nbsp;#technology</p>
                        <p>&nbsp;#market</p>
                        <p>&nbsp;#futurism</p>
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
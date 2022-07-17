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
                    <div className="component">
                        <Link to={`/users/${user.id}`}>
                            <div className="img">
                                img
                            </div>
                        </Link>
                        <Link to={`/users/${user.id}`}>
                            <h1>{user.firstName} {user.lastName}</h1>
                        </Link>
                        <h2>User Info</h2>
                        <p>{user.id}</p>
                        <p>{user.email}</p>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
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
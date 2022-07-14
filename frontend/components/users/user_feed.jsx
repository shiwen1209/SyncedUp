import React from "react";
import PostIndexContainer from "../posts/post_index_container";

class UserFeed extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchUser(this.props.users.id)
    }

    render(){
        console.log("props");
        console.log(this.props);
        return(
            <div id="user-feed">
                <div id="user-feed-profile">
                    <div className="component">
                        <h1>{this.props.users.firstName} {this.props.users.lastName}</h1>
                        <h2>User Info</h2>
                        <p>{this.props.users.id}</p>
                        <p>{this.props.users.email}</p>
                        <p>{this.props.users.firstName}</p>
                        <p>{this.props.users.lastName}</p>
                    </div>
                    <div className="component">
                        user tags
                    </div >
                </div>

                <div id="user-feed-posts">
                    <PostIndexContainer posts={this.props.posts} />
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
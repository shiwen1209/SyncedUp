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
        console.log("props");
        console.log(this.props);
        return(
            <div id="user-feed">
                <div id="user-feed-profile">
                    <div className="component">
                        <Link to={`/${this.props.user.firstName}-${this.props.user.lastName}/${this.props.user.id}`}>
                            <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
                        </Link>
                        <h2>User Info</h2>
                        <p>{this.props.user.id}</p>
                        <p>{this.props.user.email}</p>
                        <p>{this.props.user.firstName}</p>
                        <p>{this.props.user.lastName}</p>
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
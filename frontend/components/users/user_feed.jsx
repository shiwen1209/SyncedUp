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
            <div>
                <h1>User Feed page</h1>

                <div>
                    <h2>User Info</h2>
                    <p>{this.props.users.id}</p>
                    <p>{this.props.users.email}</p>
                    <p>{this.props.users.firstName}</p>
                    <p>{this.props.users.lastName}</p>
                </div>



                <PostIndexContainer posts={this.props.posts} />

            </div>
        )
    }
}

export default UserFeed;
import React from "react";
import PostIndexItemContainer from "./post_index_item_container";
// import CreatePostContainer from "./create_post_container"

class PostIndex extends React.Component{
    render(){
        const postsList = this.props.posts.map((post, idx)=>(
            <PostIndexItemContainer post={post} key = {idx} />
        ))

        console.log("post index props")
        console.log(this.props)

        return(
            <div>
                <h1>{this.props.createPostForm}</h1>
                <h1>List of posts</h1>
                <ul>
                    {postsList}
                </ul>
            </div>
        )
    }
}

export default PostIndex;
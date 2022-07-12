import React from "react";
import PostIndexItemContainer from "./post_index_item_container"

class PostIndex extends React.Component{
    render(){
        const postsList = this.props.posts.map((post, idx)=>(
            <PostIndexItemContainer post={post} key = {idx} />
        ))

        return(
            <div>
                <h1>List of posts</h1>
                <ul>
                    {postsList}
                </ul>
            </div>
        )
    }
}

export default PostIndex;
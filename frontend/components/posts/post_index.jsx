import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component{
    render(){
        const postsList = this.props.posts.map((post, idx)=>(
            <PostIndexItem post={post} key = {idx} />
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
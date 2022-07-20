import React from "react";
import PostIndexItemContainer from "./post_index_item_container";
// import CreatePostContainer from "./create_post_container"

class PostIndex extends React.Component{
    render(){
        const { posts, createPostForm, currentUser } = this.props

        const postsList = posts.map((post, idx)=>(
            <PostIndexItemContainer post={post} key = {idx} />
        ))

        return(
            <div >
                <div id="create-post" className="component">
                    <div className="img">
                        <img src={currentUser.headshotUrl} alt="" />
                    </div>
                    {createPostForm}
                </div>
                <div>
                    <ul>
                        {postsList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostIndex;
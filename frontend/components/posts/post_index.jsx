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
            <div >
                <div id="create-post" className="component">
                    <div className="img">
                        img
                    </div>
                    {this.props.createPostForm}
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
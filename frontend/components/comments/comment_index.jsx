import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";
import CreateCommentContainer from "./create_comment_container"


class CommentIndex extends React.Component {
    render(){

        // debugger

        console.log("comment index props")
        console.log(this.props)

        const commentsList = this.props.comments.map((comment, idx) => (
            <CommentIndexItemContainer comment={comment} key={idx} />
        ))



        return (
            <div>
                <CreateCommentContainer postId={this.props.post.id} />
                <h3>List of comments</h3>
                <ul>
                    {commentsList}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;
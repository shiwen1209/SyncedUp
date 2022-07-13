import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";
import CreateCommentContainer from "./create_comment_container"


class CommentIndex extends React.Component {
    render(){

        // debugger

        console.log("comment index props")
        console.log(this.props)

        const commentsList = this.props.comments.map((comment, idx) => (
            <CommentIndexItemContainer comment={comment} postId={this.props.post.id} key={idx} />
        ))



        return (
            <div>
                <CreateCommentContainer parentCommentId={null} postId={this.props.post.id} formType="Add a comment..." />
                <h3>List of comments</h3>
                <ul>
                    {commentsList}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;
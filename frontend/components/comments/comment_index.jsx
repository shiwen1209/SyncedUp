import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";
import CreateCommentContainer from "./create_comment_container";
import { Link } from "react-router-dom";


class CommentIndex extends React.Component {

    render(){
        const commentsList = this.props.comments.map((comment, idx) => (
            <CommentIndexItemContainer comment={comment} postId={this.props.post.id} key={idx} />
        ))

        return (
            <div>
                <div id="comment-area">
                    <Link to={`/users/${this.props.currentUserId}`}>
                        <div className="img">
                            img
                        </div>
                    </Link>
                     <CreateCommentContainer parentCommentId={null} postId={this.props.post.id} formType="Add a comment..." />
                </div>
                <ul>
                    {commentsList}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;
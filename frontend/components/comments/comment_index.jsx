import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";
import CreateCommentContainer from "./create_comment_container";
import { Link } from "react-router-dom";


class CommentIndex extends React.Component {

    

    render(){
        const { comments, currentUser, post } = this.props

        const commentsList = comments.map((comment, idx) => (
            <CommentIndexItemContainer comment={comment} postId={post.id} key={idx} />
        ))

        return (
            <div>
                <div id="comment-area">
                    <Link to={`/users/${currentUser.id}`}>
                        <div className="img">
                            <img src={currentUser.headshotUrl} alt="" />
                        </div>
                    </Link>
                     <CreateCommentContainer parentCommentId={null} postId={post.id} formType="Add a comment..." />
                </div>
                <ul>
                    {commentsList}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;
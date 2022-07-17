import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { updateComment, deleteComment } from "../../actions/comment_actions";
import { createLike, deleteLike } from "../../actions/like_actions";



const mstp = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        likes: state.entities.likes
    }
}


const mdtp = dispatch => {
    return {
        updateComment: (comment)=>dispatch(updateComment(comment)),
        deleteComment: (commentId)=>dispatch(deleteComment(commentId)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like))
    }
}


export default connect(mstp, mdtp)(CommentIndexItem);
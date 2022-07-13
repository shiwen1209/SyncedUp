import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { updateComment, deleteComment } from "../../actions/comment_actions";



const mstp = (state, ownProps) => {
    return {
        currentUserId: state.session.id
    }
}


const mdtp = dispatch => {
    return {
        updateComment: (comment)=>dispatch(updateComment(comment)),
        deleteComment: (commentId)=>dispatch(deleteComment(commentId))
    }
}


export default connect(mstp, mdtp)(CommentIndexItem);
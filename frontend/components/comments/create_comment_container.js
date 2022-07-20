import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";


const mstp = (state)=>{
    return{
        currentUserId: state.session.id
    }
}

const mdtp = dispatch => {
    return {
        createComment: (comment)=>dispatch(createComment(comment))
    }
}

export default connect(mstp, mdtp)(CommentForm)
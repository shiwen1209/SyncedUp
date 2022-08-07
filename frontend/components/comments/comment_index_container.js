import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import {selectPostComments} from "../../selectors/comments_selector"


const mstp = (state, ownProps) => {
    return {
        comments: selectPostComments(state, ownProps.post.id),
        currentUser: state.session.user
    }
}


// const mdtp = dispatch => {
//     return {

//     }
// }


export default connect(mstp)(CommentIndex);
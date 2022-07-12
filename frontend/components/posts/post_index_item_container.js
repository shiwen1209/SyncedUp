import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import {deletePost, updatePost} from "../../actions/post_actions";

const mstp = (state, ownProps)=>{
    return{
        currentUserId: state.session.id,
    }
}

const mdtp = dispatch=>{
    return{
        deletePost: (postId)=>dispatch(deletePost(postId)),
        updatePost: (post)=> dispatch(updatePost(post))
    }
}

export default connect(mstp, mdtp)(PostIndexItem);
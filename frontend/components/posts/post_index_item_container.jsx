import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import {deletePost, updatePost} from "../../actions/post_actions";
import { openModalPayload, closeModal } from '../../actions/modal_actions';
import { createLike, deleteLike } from "../../actions/like_actions";

const mstp = (state, ownProps)=>{
    return{
        currentUserId: state.session.id,
        likes: state.entities.likes
    }
}

const mdtp = dispatch=>{
    return{
        deletePost: (postId)=>dispatch(deletePost(postId)),
        updatePost: (post)=> dispatch(updatePost(post)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like)),
        openModalPayload: (obj)=> dispatch(openModalPayload(obj))
    }
}

export default connect(mstp, mdtp)(PostIndexItem);
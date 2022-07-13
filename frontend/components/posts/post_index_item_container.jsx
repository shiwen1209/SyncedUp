import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import {deletePost, updatePost} from "../../actions/post_actions";
import { openModalPayload, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mstp = (state, ownProps)=>{
    return{
        currentUserId: state.session.id
    }
}

const mdtp = dispatch=>{
    return{
        deletePost: (postId)=>dispatch(deletePost(postId)),
        updatePost: (post)=> dispatch(updatePost(post)),
        openModalPayload: (obj)=> dispatch(openModalPayload(obj)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mstp, mdtp)(PostIndexItem);
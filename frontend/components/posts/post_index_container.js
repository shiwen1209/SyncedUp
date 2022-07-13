import { connect } from "react-redux";
import PostIndex from "./post_index";
import { openModalPayload, closeModal } from '../../actions/modal_actions';
import React from 'react';


const mdtp = dispatch => {
    return {
        createPostForm: (
            <button onClick={() => dispatch(openModalPayload({modal: 'createPost', payload: null}))}>
                Create Post
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(null, mdtp)(PostIndex);
import { connect } from "react-redux";
import PostIndex from "./post_index";
import { openModalPayload} from '../../actions/modal_actions';
import React from 'react';


const mstp = (state) => {
    return{
        currentUser: state.session.user
    }
}

const mdtp = dispatch => {
    return {
        createPostForm: (
            <button className="comment-button"
            onClick={() => dispatch(openModalPayload({modal: 'createPost', payload: null}))}>
                Start a post
            </button>
        )
    }
}


export default connect(mstp, mdtp)(PostIndex);
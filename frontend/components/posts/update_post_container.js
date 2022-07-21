import { connect } from "react-redux";
import PostForm from "./post_form";
import {updatePost} from "../../actions/post_actions";
import {closeModal} from '../../actions/modal_actions';


const mstp = (state) => {
    return {
        formType: "Edit post",
        currentUser: state.entities.users[state.session.id],
        post: state.ui.modal.payload
    
    }
}

const mdtp = dispatch => {
    return {
        processForm: (formData, postId) => dispatch(updatePost(formData, postId)),
        closeModal: () => dispatch(closeModal())
    }
}

const UpdatePostContainer = connect(mstp, mdtp)(PostForm);

export default UpdatePostContainer;

import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost } from "../../actions/post_actions";
import { openModal, closeModal } from '../../actions/modal_actions';


const mstp = (state, ownProps) => {
    console.log("update post container");
    console.log(ownProps);
    return {
        formType: "Update Post",
        currentUser: state.entities.users[state.session.id],
        post: state.ui.modal.payload
    
    }
}

const mdtp = dispatch => {
    return {
        processForm: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    }
}

const UpdatePostContainer = connect(mstp, mdtp)(PostForm);

export default UpdatePostContainer;

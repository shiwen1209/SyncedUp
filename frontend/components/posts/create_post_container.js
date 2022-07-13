import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";
import { openModal, closeModal } from '../../actions/modal_actions';


const mstp = (state)=>{
    return{
        formType: "Create Post",
        currentUser: state.entities.users[state.session.id],
        post: {
            body: "",
            author_id: state.session.id
        }
    }
}

const mdtp = dispatch=>{
    return{
        processForm: (post)=>dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(PostForm)
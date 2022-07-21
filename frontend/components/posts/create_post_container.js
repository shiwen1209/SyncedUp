import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";
import {closeModal } from '../../actions/modal_actions';


const mstp = (state)=>{
    return{
        formType: "Create a post",
        currentUser: state.entities.users[state.session.id],
        post: {
            body: "",
            authorId: state.session.id
        }
    }
}

const mdtp = dispatch=>{
    return{
        processForm: (formData)=>dispatch(createPost(formData)),
        closeModal: ()=>dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(PostForm)
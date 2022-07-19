import { connect } from "react-redux";
import EditHeadshot from "./edit_headshot";
import {closeModal } from '../../actions/modal_actions';
import { updateUserPhoto } from "../../actions/user_action";


const mstp = (state)=>{
    return{
        user: state.ui.modal.payload
    }
}

const mdtp = dispatch => {
    return {
        updateUserPhoto: (userId, formData) => dispatch(updateUserPhoto(userId, formData)),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mstp, mdtp)(EditHeadshot)
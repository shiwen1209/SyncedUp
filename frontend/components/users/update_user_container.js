import { connect } from "react-redux";
import UpdateUser from "./update_user";
import {updateUser} from "../../actions/user_action";
import {closeModal} from '../../actions/modal_actions';

const mstp = (state)=>{
    return {
        user: state.ui.modal.payload,
        formType: "intro"
    }
}

const mdtp = dispatch =>{
    return{
        updateUser: (user)=> dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(UpdateUser)
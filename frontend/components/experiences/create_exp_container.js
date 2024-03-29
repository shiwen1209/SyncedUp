import { connect } from "react-redux";
import { closeModal } from '../../actions/modal_actions';
import { createExp, deleteExp, clearExpErrors} from '../../actions/exp_actions';
import ExpForm from "./exp_form";

const mstp = (state)=>{
    return{
        errors: state.errors.experience,
        formType: "Add",
        create_exp_type: state.ui.modal.payload,
        exp: {
            user_id: state.session.id,
            employment_type: "",
            title: "",
            company_name: "",
            location: "",
            start_date: "",
            end_date: "",
            exp_type: state.ui.modal.payload
        }
    }
}

const mdtp =dispatch => {
    return{
        processForm: (exp) => dispatch(createExp(exp)),
        closeModal: () => dispatch(closeModal()),
        deleteExp: (expId) => dispatch(deleteExp(expId)),
        clearExpErrors: () => dispatch(clearExpErrors())

    }
}

export default connect(mstp, mdtp)(ExpForm)

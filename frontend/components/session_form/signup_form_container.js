import SignupForm from "./signup_form";
import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm)

export default SignupFormContainer
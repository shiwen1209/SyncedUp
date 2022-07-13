import SessionForm from "./session_form";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login",

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)

export default LoginFormContainer
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Nav from "./nav";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("action dispatched")
    return {
        logout: () => dispatch(logout()) // action inside dispatch must be invoked
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;

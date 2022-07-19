import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Nav from "./nav";
import { fetchPeople } from "../../actions/user_action";


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        people: Object.values(state.entities.people)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()), // action inside dispatch must be invoked
        fetchPeople: () => dispatch(fetchPeople())
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;

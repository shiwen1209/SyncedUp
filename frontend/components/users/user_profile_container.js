import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_action";
import { openModalPayload } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
    // debugger
    console.log("user profile mstp", state.entities.users[ownProps.match.params.userId])
    console.log(state.entities.users)
    return {
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=>dispatch(fetchUser(userId)),
        openModalPayload: (obj) => dispatch(openModalPayload(obj))
    }

}

const UserProfileContainer = connect(mstp, mdtp)(UserProfile);

export default UserProfileContainer;
import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_action";

const mstp = (state, ownProps) => {
    // debugger
    console.log("user profile mstp")
    console.log(state.entities.users[ownProps.match.params.userId])
    return {
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=>dispatch(fetchUser(userId))
    }

}

const UserProfileContainer = connect(mstp, mdtp)(UserProfile);

export default UserProfileContainer;
import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_action";
import { openModalPayload } from '../../actions/modal_actions';
import { createConnection, deleteConnection} from "../../actions/connection_actions";

const mstp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id,
        connections: state.entities.connections
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=>dispatch(fetchUser(userId)),
        openModalPayload: (obj) => dispatch(openModalPayload(obj)),
        createConnection: (connect) => dispatch(createConnection(connect)),
        deleteConnection: (connectId)=>dispatch(deleteConnection(connectId))
    }
}

const UserProfileContainer = connect(mstp, mdtp)(UserProfile);

export default UserProfileContainer;
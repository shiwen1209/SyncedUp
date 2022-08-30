import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchProfileUser, removeProfileUser } from "../../actions/user_action";
import { openModalPayload, closeModal } from '../../actions/modal_actions';
import { createConnection, deleteConnection, addConnection, minusConnection} from "../../actions/connection_actions";
import { createRoom, fetchRoomsNoUsers} from '../../actions/room_actions';
import { removeExps } from "../../actions/exp_actions";

const mstp = (state, ownProps) => {
    return {
        user: state.entities.profileUser,
        currentUserId: state.session.id,
        connections: state.entities.connections,
        rooms: Object.values(state.entities.rooms)
    }
}

const mdtp = (dispatch) => {
    return {
        fetchProfileUser: (userId) => dispatch(fetchProfileUser(userId)),
        openModalPayload: (obj) => dispatch(openModalPayload(obj)),
        closeModal: ()=> dispatch(closeModal()),
        createConnection: (connect) => dispatch(createConnection(connect)),
        deleteConnection: (connectId)=>dispatch(deleteConnection(connectId)),
        addConnection: (currentUserId, otherUserId) => dispatch(addConnection(currentUserId, otherUserId)),
        minusConnection: (currentUserId, otherUserId) => dispatch(minusConnection(currentUserId, otherUserId)),
        createRoom: (room) => dispatch(createRoom(room)),
        fetchRoomsNoUsers: () => dispatch(fetchRoomsNoUsers()),
        removeProfileUser: () => dispatch(removeProfileUser()),
        removeExps: () => dispatch(removeExps())
        
    }
}

const UserProfileContainer = connect(mstp, mdtp)(UserProfile);

export default UserProfileContainer;
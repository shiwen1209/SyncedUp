import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchProfileUser } from "../../actions/user_action";
import { openModalPayload, closeModal } from '../../actions/modal_actions';
import { createConnection, deleteConnection, addConnection, minusConnection} from "../../actions/connection_actions";
import { createRoom, fetchRoomsNoUsers} from '../../actions/room_actions';

const mstp = (state, ownProps) => {
    // debugger
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
        addConnection: () => dispatch(addConnection()),
        minusConnection: () => dispatch(minusConnection()),
        createRoom: (room) => dispatch(createRoom(room)),
        fetchRoomsNoUsers: () => dispatch(fetchRoomsNoUsers())
        
    }
}

const UserProfileContainer = connect(mstp, mdtp)(UserProfile);

export default UserProfileContainer;
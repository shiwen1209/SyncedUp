import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_action";
import { openModalPayload, closeModal } from '../../actions/modal_actions';
import { createConnection, deleteConnection} from "../../actions/connection_actions";
import { createRoom, fetchRoomsNoUsers} from '../../actions/room_actions';

const mstp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.id,
        connections: state.entities.connections,
        rooms: Object.values(state.entities.rooms)
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=>dispatch(fetchUser(userId)),
        openModalPayload: (obj) => dispatch(openModalPayload(obj)),
        closeModal: ()=> dispatch(closeModal()),
        createConnection: (connect) => dispatch(createConnection(connect)),
        deleteConnection: (connectId)=>dispatch(deleteConnection(connectId)),
        createRoom: (room) => dispatch(createRoom(room)),
        fetchRoomsNoUsers: () => dispatch(fetchRoomsNoUsers())
    }
}

const UserProfileContainer = connect(mstp, mdtp)(UserProfile);

export default UserProfileContainer;
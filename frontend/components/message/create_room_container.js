import { connect } from 'react-redux';
import { receiveMessage, removeMessage } from '../../actions/message_actions';
import { fetchRoom, fetchRooms } from '../../actions/room_actions';
import { receiveMsgUser } from '../../actions/user_action';
import CreateRoom from './create_room';
import { fetchConnections} from "../../actions/connection_actions";


const mapState = (state, ownProps) => {

    return {
        connections: Object.values(state.entities.connections).sort(((b, a) => a.connectionId - b.connectionId)),
        currentUserId: state.session.id,
        users: state.entities.users
    };
};

export default connect(mapState, {
    fetchConnections,
    fetchRoom,
    fetchRooms,
    receiveMessage,
    removeMessage,
    receiveMsgUser
})(CreateRoom);
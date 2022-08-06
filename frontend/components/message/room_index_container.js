import { connect } from 'react-redux';
import { createRoom, destroyRoom, fetchRooms } from '../../actions/room_actions';
import RoomsIndex from './room_index';

const mapState = state => {
    return {
        currentUserId: state.session.id,
        rooms: Object.values(state.entities.rooms).sort(((a, b) => b.id - a.id)),
        users: state.entities.users
    };
};


export default connect(mapState, {
    createRoom,
    destroyRoom,
    fetchRooms
})(RoomsIndex);
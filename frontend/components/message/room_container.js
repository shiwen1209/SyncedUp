import { connect } from 'react-redux';
import { receiveMessage, removeMessage } from '../../actions/message_actions';
import { fetchRoom } from '../../actions/room_actions';
import { receiveMsgUser } from '../../actions/user_action';
import Room from './room';

const mapState = (state, ownProps) => {
    const roomId = ownProps.match.params.id;
    const messages = Object.values(state.entities.messages)
        .filter(message => message.roomId === parseInt(roomId))
        .map(message => ({
            ...message,
            sender: state.entities.users[message.senderId]?.email
        }))
        .sort(({ createdAt: timeA }, { createdAt: timeB }) => Math.sign(
            new Date(timeA).getTime() - new Date(timeB).getTime()
        ));

    return {
        currentUserId: state.session.id,
        messages,
        roomId,
        room: state.entities.rooms[parseInt(roomId)],
        users: state.entities.users
    };
};

export default connect(mapState, {
    fetchRoom,
    receiveMessage,
    removeMessage,
    receiveMsgUser
})(Room);
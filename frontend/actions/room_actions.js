import * as API from '../util/room_api_util';
import { receiveMessages } from './message_actions';
import { receiveUsers } from './user_action';

export const RECEIVE_ROOM = 'RECEIVE_ROOM';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const REMOVE_ROOM = 'REMOVE_ROOM';

const receiveRoom = (room) => {
    return {
        type: RECEIVE_ROOM,
        room
    };
};

export const fetchRooms = () => dispatch => {
    return API.fetchRooms().then(({ rooms, users }) => {
        dispatch({
            type: RECEIVE_ROOMS,
            rooms
        });
        dispatch(receiveUsers(users));
    });
};

export const fetchRoom = id => dispatch => {
    return API.fetchRoom(id).then(({ room, messages, users }) => {
        dispatch(receiveMessages(messages));
        dispatch(receiveRoom(room));
        dispatch(receiveUsers(users));
    });
};

export const createRoom = name => dispatch => {
    return API.createRoom(name).then(room => dispatch(receiveRoom(room)));
};

export const destroyRoom = roomId => dispatch => {
    return API.destroyRoom(roomId).then(
        () => dispatch({
            type: REMOVE_ROOM,
            roomId
        })
    );
};


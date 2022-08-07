import { RECEIVE_ROOM, RECEIVE_ROOMS, REMOVE_ROOM } from "../actions/room_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

export const roomsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ROOM:
            const { room } = action;
            return { ...state, [room.id]: room };
        case RECEIVE_ROOMS:
            return { ...state, ...action.rooms };
        case REMOVE_ROOM:
            const newState = { ...state };
            delete newState[action.roomId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};
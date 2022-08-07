import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { ADD_CONNECTION, MINUS_CONNECTION } from "../actions/connection_actions";



const _nullSession = {
    id: null,
    user: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id, user: action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case ADD_CONNECTION:
            nextState.user.numConnections += 1
            nextState.user.connectionIds.push(action.otherUserId)
            return nextState
        case MINUS_CONNECTION:
            nextState.user.numConnections -= 1
            nextState.user.connectionIds = nextState.user.connectionIds.filter((id) => (id !== action.otherUserId))
            return nextState
        default:
            return state;
    }
}

export default sessionReducer;
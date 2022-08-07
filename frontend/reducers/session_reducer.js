import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { ADD_CONNECTION, MINUS_CONNECTION } from "../actions/connection_actions";



const _nullSession = {
    id: null,
    user: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: currentUser.id, user: action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case ADD_CONNECTION:
            nextState.numConnections += 1
            return nextState
        case MINUS_CONNECTION:
            console.log(nextState)
            nextState.numConnections -= 1
            console.log(nextState)
            return nextState
        default:
            return state;
    }
}

export default sessionReducer;
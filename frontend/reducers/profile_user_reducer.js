import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROFILE_USER, REMOVE_PROFILE_USER } from "../actions/user_action";
import { ADD_CONNECTION, MINUS_CONNECTION, RECEIVE_CONNECTION } from "../actions/connection_actions";


const profileUsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PROFILE_USER:
            return action.user;
        case REMOVE_PROFILE_USER:
            return {}
        case ADD_CONNECTION:
            if(Object.keys(nextState).length > 0){
                nextState.numConnections += 1
                nextState.connectionIds.push(action.currentUserId)
                return nextState
            }
        case MINUS_CONNECTION:
            if (Object.keys(nextState).length > 0) {
                nextState.numConnections -= 1
                nextState.connectionIds = nextState.connectionIds.filter((id) => (id !== action.currentUserId))
                return nextState
            }
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}

export default profileUsersReducer;
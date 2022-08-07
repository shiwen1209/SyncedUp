import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PROFILE_USER} from "../actions/user_action";
import { ADD_CONNECTION, MINUS_CONNECTION } from "../actions/connection_actions";


const profileUsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PROFILE_USER:
            return action.user;
        case LOGOUT_CURRENT_USER:
            return {};
        case ADD_CONNECTION:
            debugger
            // nextState.numConnections += 1
            // nextState.firstName = "bob"
            return {}
        case MINUS_CONNECTION:
            // nextState.numConnections -= 1
            // nextState.firstName = "mary"
            return {}
        default:
            return state;
    }

}

export default profileUsersReducer;
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_PEOPLE} from "../actions/user_action";
import { RECEIVE_CONNECTIONS } from "../actions/connection_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.users;
        case RECEIVE_USER:
            const user = Object.values(action.user)[0]
            nextState[user.id] = user
            return nextState;
        case RECEIVE_CONNECTIONS:
            return action.user
        case RECEIVE_PEOPLE:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }

}

export default usersReducer;
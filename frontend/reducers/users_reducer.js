import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PEOPLE, RECEIVE_MSG_USER, RECEIVE_USERS } from "../actions/user_action";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_MSG_USER:
            nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_USERS:
            return {...state, ...action.users};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}

export default usersReducer;
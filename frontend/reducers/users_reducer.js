import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_action";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.users;
        case RECEIVE_USER:
            // debugger
            const user = Object.values(action.user)[0]
            console.log("USER")
            console.log (user);
            // debugger
            nextState[user.id] = user
            return nextState;
        default:
            return state;
    }

}

export default usersReducer;
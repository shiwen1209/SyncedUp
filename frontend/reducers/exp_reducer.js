import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_action";
import { RECEIVE_EXP, DELETE_EXP } from "../actions/exp_actions";

const expReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.experiences;
        case RECEIVE_USER:
            return action.experiences; //double check if need to merge with current state
        case RECEIVE_EXP:
            nextState[action.exp.id] = action.exp;
            return nextState;
        case DELETE_EXP:
            delete nextState[action.expId]
            return nextState
        default:
            return state;
    }

}

export default expReducer;
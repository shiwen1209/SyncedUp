import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_PROFILE_USER } from "../actions/user_action";
import { RECEIVE_EXP, DELETE_EXP, REMOVE_EXPS } from "../actions/exp_actions";

const expReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.experiences;
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_PROFILE_USER:
            return action.experiences; //double check if need to merge with current state
        case RECEIVE_EXP:
            nextState[action.exp.id] = action.exp;
            return nextState;
        case DELETE_EXP:
            delete nextState[action.expId]
            return nextState;
        case REMOVE_EXPS:
            return {}
        default:
            return state;
    }

}

export default expReducer;
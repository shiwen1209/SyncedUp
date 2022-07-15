import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_action";
// import { RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";

const expReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.experiences;
        case RECEIVE_USER:
            return action.experiences; //double check if need to merge with current state
        // case RECEIVE_COMMENT:
        //     nextState[action.comment.id] = action.comment;
        //     return nextState;
        // case DELETE_COMMENT:
        //     delete nextState[action.commentId]
        //     return nextState
        default:
            return state;
    }

}

export default expReducer;
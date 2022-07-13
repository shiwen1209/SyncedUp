import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.comments;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case DELETE_COMMENT:
            delete nextState[action.commentId]
            return nextState
        default:
            return state;
    }

}

export default commentsReducer;
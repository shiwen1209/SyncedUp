import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

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
            return nextState;
        case RECEIVE_LIKE:
            if (action.like.likableType === "Comment") {
                const comment1 = Object.assign({}, nextState[action.like.likableId]);
                comment1.numLikes += 1;
                nextState[action.like.likableId] = comment1;
                return nextState
            } else {
                return state
            }
        case REMOVE_LIKE:
            if (action.like.likableType === "Comment") {
                const comment2 = Object.assign({}, nextState[action.like.likableId]);
                comment2.numLikes -= 1;
                nextState[action.like.likableId] = comment2;
                return nextState
            } else {
                return state
            }
        default:
            return state;
    }

}

export default commentsReducer;
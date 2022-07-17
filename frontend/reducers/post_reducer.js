import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POST, DELETE_POST} from "../actions/post_actions";
import { RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.posts;
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case DELETE_POST:
            console.log("delete post")
            console.log(action.postId)
            delete nextState[action.postId]
            return nextState
        case RECEIVE_COMMENT:
            const post = Object.assign({}, nextState[action.comment.postId]);
            post.numComments += 1;
            nextState[action.comment.postId] = post;
            return nextState
        case DELETE_COMMENT:
            const post2 = Object.assign({}, nextState[action.postId]);
            post2.numComments -= 1;
            nextState[action.postId] = post2;
            return nextState
        default:
            return state;
    }

}

export default postsReducer;
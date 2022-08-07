import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_POST, DELETE_POST, REMOVE_POSTS } from "../actions/post_actions";
import { RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.posts;
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case DELETE_POST:
            delete nextState[action.postId]
            return nextState;
        case REMOVE_POSTS:
            return {};
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
        case RECEIVE_LIKE:
            if (action.like.likableType === "Post") {
                const post3 = Object.assign({}, nextState[action.like.likableId]);
                post3.numLikes += 1;
                nextState[action.like.likableId] = post3;
                return nextState
            } else {
                return state
            }
        case REMOVE_LIKE:
            if (action.like.likableType === "Post") {
                const post4 = Object.assign({}, nextState[action.like.likableId]);
                post4.numLikes -= 1;
                nextState[action.like.likableId] = post4;
                return nextState
            } else {
                return state
            }
        default:
            return state;
    }

}

export default postsReducer;
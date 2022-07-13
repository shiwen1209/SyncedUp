import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_POST, DELETE_POST } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.comments;
        // case RECEIVE_POST:
        //     nextState[action.post.id] = action.post;
        //     return nextState;
        // case DELETE_POST:
        //     console.log("delete post")
        //     console.log(action.postId)
        //     delete nextState[action.postId]
        //     return nextState
        default:
            return state;
    }

}

export default commentsReducer;
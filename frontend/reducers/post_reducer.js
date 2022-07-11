import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.posts
        default:
            return state;
    }

}

export default postsReducer;
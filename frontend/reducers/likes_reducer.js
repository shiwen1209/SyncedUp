import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_LIKE, REMOVE_LIKE, REMOVE_LIKES } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = {};
            Object.keys(action.likes).forEach((likeId)=>{
                nextState[JSON.stringify(action.likes[likeId])] = parseInt(likeId);
            })
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_LIKE:
            nextState[JSON.stringify(action.like)] = parseInt(action.likeId);
            return nextState;
        case REMOVE_LIKE:
            delete nextState[JSON.stringify(action.like)]
            return nextState
        case REMOVE_LIKES:
            return {};
        default:
            return state;
    }

}

export default likesReducer;
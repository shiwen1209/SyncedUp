import {RECEIVE_PEOPLE } from "../actions/user_action";
import {LOGOUT_CURRENT_USER } from "../actions/session_actions";

const peopleReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PEOPLE:
            return action.people;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}

export default peopleReducer;
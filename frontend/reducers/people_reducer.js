import {RECEIVE_PEOPLE } from "../actions/user_action";

const peopleReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PEOPLE:
            return action.people;
        default:
            return state;
    }

}

export default peopleReducer;
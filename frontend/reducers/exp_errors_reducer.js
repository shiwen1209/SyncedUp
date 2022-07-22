import {RECEIVE_EXP, RECEIVE_EXP_ERRORS, CLEAR_EXP_ERRORS } from "../actions/exp_actions";

const expErrorsReducer = (state = [], action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EXP_ERRORS:
            return action.errors;
        case RECEIVE_EXP:
            return [];
        case CLEAR_EXP_ERRORS:
            return [];
        default:
            return state;
    }
};

export default expErrorsReducer;
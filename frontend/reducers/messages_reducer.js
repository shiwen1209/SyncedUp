// import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";

// const messagesReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_MESSAGES:
//             return action.messages;
//         default:
//             return state;
//     }
// }

// export default messagesReducer;


import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";


export const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MESSAGE:
            const { message } = action;
            return { ...state, [message.id]: message };
        case RECEIVE_MESSAGES:
            return { ...state, ...action.messages };
        case REMOVE_MESSAGE:
            const newState = { ...state };
            delete newState[action.messageId];
            return newState;
        default:
            return state;
    }
};
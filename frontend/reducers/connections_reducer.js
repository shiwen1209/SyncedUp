import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION} from "../actions/connection_actions";
import { RECEIVE_USER } from "../actions/user_action";

const connectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CONNECTIONS:
            return action.connections;
        case RECEIVE_CURRENT_USER:
            return action.connections;
        case RECEIVE_USER:
            return action.connections;
        case RECEIVE_CONNECTION:
            nextState[action.connection.id] = action.connection;
            return nextState;
        case REMOVE_CONNECTION:
            // debugger
            delete nextState[action.connectedUserId]
            return nextState
        default:
            return state;
    }

}

export default connectionsReducer;
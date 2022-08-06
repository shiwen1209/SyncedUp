import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_PEOPLE, RECEIVE_MSG_USER, RECEIVE_USERS } from "../actions/user_action";
import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION} from "../actions/connection_actions";
// import { RECEIVE_SENDERS } from "../actions/message_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.users;
        case RECEIVE_USER:
            const user = Object.values(action.user)[0]
            nextState[user.id] = user
            return nextState;
        case RECEIVE_MSG_USER:
            nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_CONNECTIONS:
            return action.user
        case RECEIVE_CONNECTION:
            const connectIds = [action.connect.user1Id, action.connect.user2Id]
            Object.keys(nextState).forEach((key)=>{
                if (connectIds.includes(nextState[key].id)){
                    nextState[key].numConnections += 0.5
                }
            })
            return nextState
        case REMOVE_CONNECTION:
            Object.keys(nextState).forEach((key) =>
                nextState[key].numConnections -= 0.5)
            return nextState
        case RECEIVE_PEOPLE:
            nextState[action.user.id] = action.user
            return nextState;
        case RECEIVE_USERS:
            return {...state, ...action.users}
        default:
            return state;
    }

}

export default usersReducer;
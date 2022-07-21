import * as UserApiUtil from "../util/user_api_util";
import * as ConnectionApiUtil from "../util/connection_api_util";

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS"
export const RECEIVE_CONNECTION = "RECEIVE_CONNECTION"
export const REMOVE_CONNECTION = "REMOVE_CONNECTION"

const receiveConnections = (payload) => {
    let connections = {};
    if (payload.connections) {connections = payload.connections }
    return {
        type: RECEIVE_CONNECTIONS,
        user: payload.users,
        connections
    }
}

const receiveConnection = (payload)=>{
    return{
        type: RECEIVE_CONNECTION,
        connection: payload.connection,
        connect: payload.connect
    }
}

const removeConnection = (connectedUserId) => {
    return {
        type: REMOVE_CONNECTION,
        connectedUserId
    }
}


export const fetchConnections = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then((payload) => dispatch(receiveConnections(payload)))
}

export const createConnection = (connect)=> dispatch=>{
    return ConnectionApiUtil.createConnection(connect)
        .then((payload) =>{
            return dispatch(receiveConnection(payload))
        }) 
}

export const deleteConnection = (connectId) => dispatch => {
    return ConnectionApiUtil.deleteConnection(connectId)
        .then((payload) =>{
            return dispatch(removeConnection(payload.connection.id))
        } )
}
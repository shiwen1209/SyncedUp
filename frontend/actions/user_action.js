import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";

const receiveUser = (payload)=>{
    let experiences = {};
    if (payload.experiences) { experiences = payload.experiences }
    let connections = {};
    if (payload.connections) { connections = payload.connections }

    return {
        type: RECEIVE_USER,
        user: payload.users,
        experiences,
        connections
    }
}

const receivePeople = (payload) => {
    return {
        type: RECEIVE_PEOPLE,
        people: payload.people,
    }
}


export const fetchUser = (userId)=> dispatch =>{
    return UserApiUtil.fetchUser(userId)
        .then((payload)=>dispatch(receiveUser(payload)))
}


export const updateUser = (user) => dispatch => {
    return UserApiUtil.updateUser(user)
        .then((payload) => dispatch(receiveUser(payload)))
}


export const fetchPeople = ()=>dispatch=>{
    return UserApiUtil.fetchPeople()
        .then((payload)=>dispatch(receivePeople(payload)))
}


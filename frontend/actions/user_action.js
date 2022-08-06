import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_MSG_USER ="RECEIVE_MSG_USER";

export const receiveUser = (payload)=>{
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
    let people = {};
    if (payload.people) { people = payload.people }
    let user = {};
    if (payload.user) { user = payload.user }
    return {
        type: RECEIVE_PEOPLE,
        people,
        user
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

export const updateUserPhoto = (userId, formData) => dispatch => {
    // debugger
    return UserApiUtil.updateUserPhoto(userId, formData)
        .then((payload) => dispatch(receiveUser(payload)))
}


export const fetchPeople = ()=>dispatch=>{
    return UserApiUtil.fetchPeople()
        .then((payload)=>dispatch(receivePeople(payload)))
}


// added for rooms
export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    };
};


export const receiveMsgUser = (user)=>{
    return {
        type: RECEIVE_MSG_USER,
        user

    }
}
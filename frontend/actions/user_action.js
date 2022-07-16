import * as UserApiUtil from "../util/user_api_util"

export const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = (payload)=>{
    let experiences = {};
    if (payload.experiences) { experiences = payload.experiences }

    return {
        type: RECEIVE_USER,
        user: payload.users,
        experiences
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

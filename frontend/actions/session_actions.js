import * as SessionApiUtil from "../util/session_api_util";
import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

const receiveCurrentUser = (payload) => {
    let posts = {};
    let comments = {};
    let experiences = {};
    let likes = {};
    let connections ={};
    if (payload.posts){posts = payload.posts}
    if (payload.comments) { comments = payload.comments }
    if (payload.experiences) { experiences = payload.experiences }
    if (payload.likes) { likes = payload.likes }
    if (payload.connections) { connections = payload.connections }
    
    return {
        type: RECEIVE_CURRENT_USER,
        user: payload.user,
        posts: posts,
        comments,
        experiences,
        likes,
        connections
    }
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
        .then(
            (payload) => dispatch(receiveCurrentUser(payload)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
)

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
        .then(
            (payload) => dispatch(receiveCurrentUser(payload)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
}
    
export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}

export const fetchUser=(id)=>dispatch=>{
    return UserApiUtil.fetchUser(id)
        .then(
            (payload) => dispatch(receiveCurrentUser(payload)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
}
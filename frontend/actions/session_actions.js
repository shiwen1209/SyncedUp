import * as SessionApiUtil from "../util/session_api_util";
import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (payload) => {
    console.log("receive currentUser")
    console.log(payload)

    let posts = {};
    if (payload.posts){posts = payload.posts}

    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: payload.users,
        posts: posts
    }
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => {
    // debugger
    console.log("receive errors action")
    console.log(errors)
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
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
    console.log("logging out")
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}

export const fetchUser=(id)=>dispatch=>{
    return UserApiUtil.fetchUser(id)
        .then(
            (payload) => dispatch(receiveCurrentUser(payload)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
}
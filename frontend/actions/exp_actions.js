import * as ExpApiUtil from '../util/exp_api_util';

export const RECEIVE_EXP = "RECEIVE_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const RECEIVE_EXP_ERRORS = "RECEIVE_EXP_ERRORS";
export const CLEAR_EXP_ERRORS = "CLEAR_EXP_ERRORS";

const receiveExp = (exp) => {
    return {
        type: RECEIVE_EXP,
        exp
    }
}

export const removeExp = (expId) => {
    return {
        type: DELETE_EXP,
        expId
    }
}

export const receiveExpErrors = (errors) => {
    return {
        type: RECEIVE_EXP_ERRORS,
        errors
    }
}

export const clearExpErrors = () => {
    return {
        type: CLEAR_EXP_ERRORS
    }
}

export const createExp = (expForm) => dispatch => (
    ExpApiUtil.createExp(expForm)
        .then((payload) => dispatch(receiveExp(payload.experience)),
            (err) => dispatch(receiveExpErrors(err.responseJSON)))
)

export const updateExp = (expForm) => dispatch => (
    ExpApiUtil.updateExp(expForm)
        .then((payload) =>dispatch(receiveExp(payload.experience)),
                (err) => dispatch(receiveExpErrors(err.responseJSON)))
)

export const deleteExp = (expId) => {
    return dispatch => (
        ExpApiUtil.deleteExp(expId)
            .then((payload) => {
                return dispatch(removeExp(payload.experience.id))
            })
    )
}



import * as ExpApiUtil from '../util/exp_api_util';

export const RECEIVE_EXP = "RECEIVE_EXP";
export const DELETE_EXP = "DELETE_EXP";

export const receiveExp = (exp) => {
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

export const createExp = (expForm) => dispatch => (
    ExpApiUtil.createExp(expForm)
        .then((payload) => dispatch(receiveExp(payload.experience)))
)

export const updateExp = (expForm) => dispatch => (
    ExpApiUtil.updateExp(expForm)
        .then((payload) => {
            return dispatch(receiveExp(payload.experience))
        })
)

export const deleteExp = (expId) => {
    return dispatch => (
        ExpApiUtil.deleteExp(expId)
            .then((payload) => {
                return dispatch(removeExp(payload.experience.id))
            })
    )
}



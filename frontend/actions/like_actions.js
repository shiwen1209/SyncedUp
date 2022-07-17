import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (payload) => {
    return {
        type: RECEIVE_LIKE,
        like: payload.like,
        likeId: payload.likeId
    }
}

const removeLike = (like) => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const createLike = (likeForm) => dispatch => (
    LikeApiUtil.createLike(likeForm)
        .then((payload) => dispatch(receiveLike(payload)))
)

export const deleteLike = (likeId) => {  
    return dispatch => (
        LikeApiUtil.deleteLike(likeId)
            .then((payload) => {
                return dispatch(removeLike(payload.like))
            })
    )
}



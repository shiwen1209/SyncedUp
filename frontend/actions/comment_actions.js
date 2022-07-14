import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const removeComment = (commentId) => {
    // debugger
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export const createComment = (commentForm) => dispatch => (
    CommentApiUtil.createComment(commentForm)
        .then((payload) => dispatch(receiveComment(payload.comment)))
)

export const updateComment = (commentForm) => dispatch => (
    CommentApiUtil.updateComment(commentForm)
        .then((payload) => {
            return dispatch(receiveComment(payload.comment))
        })
)

export const deleteComment = (commentId) => {  
    // debugger
    return dispatch => (
        CommentApiUtil.deleteComment(commentId)
            .then((payload) => {
                // debugger
                return dispatch(removeComment(payload.comment.id))
            })
    )
}



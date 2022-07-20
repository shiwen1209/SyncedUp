import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const removeComment = (payload) => {
    return {
        type: DELETE_COMMENT,
        commentId: payload.comment.id,
        postId: payload.comment.postId
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
    return dispatch => (
        CommentApiUtil.deleteComment(commentId)
            .then((payload) => {
                return dispatch(removeComment(payload))
            })
    )
}



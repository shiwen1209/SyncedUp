export const createComment = (comment)=>(
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: {comment}
    })
);

export const deleteComment = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`
    })

}


export const updateComment = (comment)=>(
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment}
    })
)
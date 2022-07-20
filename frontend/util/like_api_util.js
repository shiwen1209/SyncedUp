export const createLike = (like) => (
    $.ajax({
        method: 'POST',
        url: 'api/likes',
        data: { like }
    })
);

export const deleteLike = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/likes/${id}`
    })
}
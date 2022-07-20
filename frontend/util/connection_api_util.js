export const createConnection = (connection) => (
    $.ajax({
        method: 'POST',
        url: 'api/connections',
        data: { connection }
    })
);

export const deleteConnection = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/connections/${id}`
    })
}
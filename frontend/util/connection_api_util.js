export const createConnection = (connection) => (
    $.ajax({
        method: 'POST',
        url: 'api/connections',
        data: { connection }
    })
);

export const deleteConnection = (id) => {
    // debugger
    return $.ajax({
        method: 'DELETE',
        url: `api/connections/${id}`
    })
}
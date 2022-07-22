export const fetchSenders = ()=>{
    return $.ajax({
        method: 'GET',
        url: 'api/messages'
    })
}

export const fetchMessages = (senderId) => {
    return $.ajax({
        method: 'GET',
        url: `api/messages/${senderId}`
    })
}

export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: 'api/messages',
        data: {message}
    })
);

export const deleteMessage = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/messages/${id}`
    })
}

// export const fetchSenders = ()=>{
//     return $.ajax({
//         method: 'GET',
//         url: 'api/messages'
//     })
// }

// export const fetchMessages = (senderId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `api/messages/${senderId}`
//     })
// }

// export const createMessage = (message) => (
//     $.ajax({
//         method: 'POST',
//         url: 'api/messages',
//         data: {message}
//     })
// );

// export const deleteMessage = id => {
//     return $.ajax({
//         method: 'DELETE',
//         url: `api/messages/${id}`
//     })
// }




// messages

import apiFetch from './custom_fetch';

export const createMessage = message => (
    apiFetch('messages', {
        method: 'POST',
        data: { message }
    })
);

export const destroyMessage = id => (
    apiFetch(`messages/${id}`, {
        method: 'DELETE'
    })
);
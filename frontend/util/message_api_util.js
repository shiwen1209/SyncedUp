import apiFetch from './custom_fetch';

export const createMessage = message => {
    return apiFetch('messages', {
        method: 'POST',
        data: { message }
    })
};

export const destroyMessage = id => (
    apiFetch(`messages/${id}`, {
        method: 'DELETE'
    })
);
import apiFetch from './custom_fetch';

// rooms

export const fetchRooms = () => apiFetch('rooms');

export const fetchRoom = id => apiFetch(`rooms/${id}`);

export const createRoom = room => (
    apiFetch('rooms', {
        method: 'POST',
        data: { room }
    })
);

export const destroyRoom = id => (
    apiFetch(`rooms/${id}`, {
        method: 'DELETE'
    })
);

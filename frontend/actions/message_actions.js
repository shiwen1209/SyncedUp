import * as MsgApiUtil from '../util/message_api_util';

export const RECEIVE_SENDERS = "RECEIVE_SENDERS"
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveSenders = (users)=>{
    return{
        type: RECEIVE_SENDERS,
        users
    }
}

const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

export const fetchSenders =()=> dispatch => (
    MsgApiUtil.fetchSenders()
    .then((payload) => dispatch(receiveSenders(payload)))
)

export const fetchMessages = (senderId) => dispatch => (
    MsgApiUtil.fetchMessages(senderId)
        .then((payload) => dispatch(receiveMessages(payload)))
)
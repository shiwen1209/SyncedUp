import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_PAYLOAD } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case OPEN_MODAL_PAYLOAD:
            console.log('modal reducer')
            console.log(action);
            return {modal: action.modal, payload: action.payload};
        default:
            return state;
    }
}

export default modalReducer;
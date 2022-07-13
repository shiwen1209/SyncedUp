export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_PAYLOAD = "OPEN_MODAL_PAYLOAD";

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const openModalPayload = ({modal, payload = null}) =>{
    console.log("open modal payload");
    return {
        type: OPEN_MODAL_PAYLOAD,
        modal: modal,
        payload: payload
    }
}
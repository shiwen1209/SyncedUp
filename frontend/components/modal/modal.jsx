import React from 'react';
import { closeModal } from '../z';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreatePostContainer from '../posts/create_post_container';
import UpdatePostContainer from '../posts/update_post_container';
import UpdateUserContainer from "../users/update_user_container";
import UpdateAboutContainer from "../users/update_about_container";
import CreateExpContainer from "../experiences/create_exp_container";
import UpdateExpContainer from "../experiences/update_exp_container";
import EditHeadshotContainer from '../users/edit_headshot_container';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case "createPost":
            component = <CreatePostContainer />
            break;
        case "updatePost":
            component = <UpdatePostContainer />
            break;
        case "updateUser":
            component = <UpdateUserContainer />
            break;
        case "updateAbout":
            component = <UpdateAboutContainer />
            break;
        case "createExp":
            component = <CreateExpContainer />
            break;
        case "updateExp":
            component = <UpdateExpContainer />
            break;
        case "editHeadshot":
            component = <EditHeadshotContainer />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
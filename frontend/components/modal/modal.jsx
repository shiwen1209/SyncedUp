import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreatePostContainer from '../posts/create_post_container';
import UpdatePostContainer from '../posts/update_post_container';
import { proposalSyntaxPlugins } from '@babel/preset-env/lib/shipped-proposals';

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
            console.log("Create post hit");
            console.log(modal)
            component = <CreatePostContainer />
            break;
        case "updatePost":
            console.log("Update post hit");
            component = <UpdatePostContainer />
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
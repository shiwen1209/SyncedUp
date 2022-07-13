import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// for testing purpose
import { signup, login, logout } from "./actions/session_actions";
import {createPost, updatePost, deletePost} from "./actions/post_actions"
import {createComment, updateComment, deleteComment} from "./actions/comment_actions"

document.addEventListener("DOMContentLoaded", () => {
    // console.log("entry file")
    const root = document.getElementById("root");

    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        }
    };

    const store = configureStore(preloadedState);
    window.store = store;


    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(<Root store={store}/>, root);

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    
    window.createPost = createPost;
    window.updatePost = updatePost;
    window.deletePost = deletePost;
    window.createComment= createComment;
    window.updateComment= updateComment;
    window.deleteComment= deleteComment;
});
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// for testing purpose
import { signup, login, logout } from "./actions/session_actions";

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
    ReactDOM.render(<h1>The website is under construction</h1>, root);

    window.signup = signup;
    window.login = login;
    window.logout = logout;

});
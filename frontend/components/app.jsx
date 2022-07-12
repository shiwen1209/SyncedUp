import React from "react";
import NavContainer from "./nav/nav_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import UserFeedContainer from "./users/user_feed_container"

const App = () => {
    console.log("App")
    return (
        <div>
            <h1>Syncedup</h1>
            <NavContainer />
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/feed" component={UserFeedContainer} />
            </Switch>
        </div>
    )
}

export default App; 
import React from "react";
import Homepage from "./homepage";
import NavContainer from "./nav/nav_container";
import {Route, Switch, Redirect} from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import UserFeedContainer from "./users/user_feed_container";
import UserProfileContainer from "./users/user_profile_container";
import MyNetworkContainer from "./users/my_network_container";
import PeopleContainer from "./users/people_container";
import Modal from "./modal/modal";
import People from "./users/people";
import MessageIndexContainer from "./message/message_index_container";
import RoomsIndex from './message/room_index';
import Room from './message/room';
import { connect } from "react-redux";


const App = (props) => {
    return (
        <div id="app">
            <Modal />
            <header>
                <NavContainer />
            </header>

            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/feed" component={UserFeedContainer} />
                <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
                <ProtectedRoute path="/mynetwork/people" component={PeopleContainer} />
                <ProtectedRoute path="/mynetwork" component={MyNetworkContainer} />
                {/* <ProtectedRoute path="/messaging" component={MessageIndexContainer} /> */}
                <Route path='/messaging' render={routeProps => (
                    <section className='home'>
                        <RoomsIndex {...routeProps} />
                        {props.currentUser &&
                            <Route path='/messaging/:id' component={Room} />
                        }
                    </section>
                )} />
                <Redirect to='/' />
                <AuthRoute exact path="/" component={Homepage} />
            </Switch>
        </div>
    )
}

const mapState = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapState)(App);
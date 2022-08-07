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
import RoomsIndexContainer from './message/room_index_container';
import RoomContainer from './message/room_container';
import CreateRoomContainer from "./message/create_room_container";
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
                <Route path='/messaging' render={routeProps => (
                    <div id="message-index">
                        <RoomsIndexContainer {...routeProps} />
                        {props.currentUser ? 
                            <Switch>
                                <Route exact path='/messaging/new' component={CreateRoomContainer} />
                                <Route path='/messaging/:id' component={RoomContainer} />
                            </Switch> : <Redirect to='/login' />
                        }
                    </div>
                )} />
                <AuthRoute exact path="/" component={Homepage} />
            </Switch>
        </div>
    )
}

const mapState = (state) => ({
    currentUser: state.session.user
});

export default connect(mapState)(App);
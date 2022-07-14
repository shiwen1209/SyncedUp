import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";


const mapStateToProps = state => ({
    // loggedIn: Boolean(state.session.id),
    userId: state.session.id
})


const Auth = ({ userId, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            userId ? <Redirect to={`/feed`} /> : <Component {...props} />
        )}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

const Protected = ({ userId, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            userId ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
)

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
import React from 'react';
import { withTracker } from "meteor/react-meteor-data";
import {
    Route,
    Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, currentUserId, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            currentUserId ?
                <Component {...props} /> :
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}
                />
        )}
    />
);

export default withTracker(() => {
    return {
        currentUserId: Meteor.userId(),
    };
})(PrivateRoute);
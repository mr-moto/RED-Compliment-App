import React from "react";
import { Switch, Route } from "react-router";

import PostsContainer from "../../ui/containers/Posts";
import ProfileContainer from "../../ui/containers/Profile";
import SettingsContainer from "../../ui/containers/Settings";
import ShareContainer from "../../ui/containers/Share";
import LoginContainer from "../../ui/containers/Login";
import RegisterContainer from "../../ui/containers/Register";
import NotFound from "../../ui/containers/NotFound";
import PrivateRoute from '../../ui/components/PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginContainer} />
    <PrivateRoute exact path="/" component={PostsContainer} />
    <PrivateRoute exact path="/profile" component={ProfileContainer} />
    <PrivateRoute exact path="/profile/settings" component={SettingsContainer} />
    <PrivateRoute exact path="/share" component={ShareContainer} />;
    <Route path="*" component={NotFound} />
  </Switch>
);
export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";

import PostsContainer from "../../ui/containers/Posts" ;
import ProfileContainer from "../../ui/containers/Profile";
import SettingsContainer from "../../ui/containers/Settings";
import ShareContainer from "../../ui/containers/Share";
import LoginContainer from "../../ui/containers/Login";
import NotFound from "../../ui/containers/NotFound";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={PostsContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/profile/settings" component={SettingsContainer} />
        <Route exact path="/share" component={ShareContainer} />;
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;

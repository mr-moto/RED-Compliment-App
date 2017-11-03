import React from "react";
import { Switch, Route } from "react-router-dom";

import PostsContainer from "../../ui/containers/Posts" ;
// import { ProfileContainer } from "../containers/Profile";
// import { SettingsContainer } from "../containers/Settings";
// import { ShareContainer } from "../containers/Share";
// import { LoginContainer } from "../containers/Login";
// import { NotFound } from "../containers/NotFound";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={PostsContainer} />
        {/* <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/profile/settings" component={SettingsContainer} />
        <Route exact path="/share" component={ShareContainer} />;
        <Route path="*" component={NotFound} /> */}
    </Switch>
);

export default Routes;

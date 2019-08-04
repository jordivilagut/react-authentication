import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {PrivateRoute} from "../components/PrivateRoute";
import {Dashboard} from "../pages/Dashboard";
import {Login} from "../pages/Login";
import {Signup} from "../pages/Signup";
import {TopNav} from "../components/TopNav";

export const App = props => (
    <div>
        <TopNav {...props}/>
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard} props={props} />
            <Route exact path="/login" render={() => (<Login {...props}/>)} />
            <Route exact path="/signup" render={() => (<Signup {...props}/>)} />
        </Switch>
    </div>
);



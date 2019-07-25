import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {PrivateRoute} from "../components/PrivateRoute";
import {LoginContainer} from "../containers/LoginContainer";
import {DashboardContainer} from "../containers/DashboardContainer";

export default class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginContainer} />
                <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
            </Switch>
        );
    }
}



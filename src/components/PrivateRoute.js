import React from "react";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({ component: Component, props}) => (

    <Route render={() => localStorage.getItem('user') ?
        (<Component {...props}/>) :
        (<Redirect to='/login' />)
    }/>
);
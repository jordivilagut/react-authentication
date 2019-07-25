import React from "react";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({ component: Component}) => (

    <Route render={props => localStorage.getItem("auth-token") ?
        (<Component {...props}/>) :
        (<Redirect to='/' />)
    }/>
);
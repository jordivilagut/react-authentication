import React from 'react';
import {FormButton} from "../components/FormButton";

export const Dashboard = props => (
    <div>
        <p>Dashboard</p>
        <a href="login">
            <FormButton text='Log Out' click={() => props.handleLogout()}/>
        </a>
        <p>User: {props.authentication.user}</p>
    </div>
);
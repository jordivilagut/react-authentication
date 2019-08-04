import React from 'react';
import {FormButton} from "../components/FormButton";

export const Dashboard = props => (
    <div>
        <p>Dashboard</p>
        <a href="login">
            <FormButton text='Log Out' click={() => props.handleLogout()}/>
        </a>
        <p>User: {JSON.parse(props.authentication.user).username}</p>
    </div>
);

//TODO - Store state as object, no need to parse after (read about storing objects as state, is it possible?)
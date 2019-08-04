import React from 'react';
import {Logo} from "./Logo";
import {FormButton} from "./FormButton";
import '../styles/index.css';

export const TopNav = props => (
    <nav>
        <Logo/>
        <FormButton css={props.authentication.isLogged ? "" : "hidden"} text='Log Out' click={() => props.handleLogout()}/>
    </nav>
);
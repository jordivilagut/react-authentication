import React from 'react';
import {Logo} from "./Logo";
import {FormButton} from "./FormButton";
import '../styles/index.css';
import '../styles/topnav.css';

export const TopNav = props => (
    <nav className="bottomShadow">
        <div className="appContent">
            <Logo/>
            <FormButton css={props.authentication.isLogged ? "" : "hidden"} text='Log Out' click={() => props.handleLogout()}/>
        </div>
    </nav>
);
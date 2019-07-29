import React from 'react';
import {FormButton} from "../components/FormButton";

export const Login = props => (
    <div>
        <h1>AppName</h1>
        <h4>AppSubtitle</h4>
        <form className='loginForm'>
            <input name="username" placeholder='Username' type='text' value={props.user.username} onChange={props.handleInputChange}/>
            <input name="password" placeholder='Password' type='password' value={props.user.password} onChange={props.handleInputChange}/>
            <FormButton text='Log In' click={() => props.handleSubmit(props.user)}/>
        </form>
    </div>
);
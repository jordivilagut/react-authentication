import React from 'react';
import {FormButton} from "../components/FormButton";

export const Login = props => (
    <div>
        <form className='loginForm'>
            <input name="username" placeholder='Username' type='text' value={props.userForm.username} onChange={props.handleInputChange}/>
            <input name="password" placeholder='Password' type='password' value={props.userForm.password} onChange={props.handleInputChange}/>
            <FormButton text='Log In' click={() => props.handleLogin(props.userForm)}/>
        </form>
        <a href="signup">Register</a>
    </div>
);
import React from 'react';
import {FormButton} from "../components/FormButton";

export const Signup = props => (
    <div>
        <h1>AppName</h1>
        <h4>AppSubtitle</h4>
        <form className='loginForm'>
            <input name="username" placeholder='Username' type='text' value={props.userForm.username} onChange={props.handleInputChange}/>
            <input name="password" placeholder='Password' type='password' value={props.userForm.password} onChange={props.handleInputChange}/>
            <FormButton text='Sign up' click={() => props.handleSubmit(props.userForm)}/>
        </form>
        <a href="login">I'm already registered</a>
    </div>
);
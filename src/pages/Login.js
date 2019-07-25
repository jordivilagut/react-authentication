import React from 'react';
import {FormButton} from "../components/FormButton";

export const Login = () => (
    <div>
        <h1>AppName</h1>
        <h4>AppSubtitle</h4>
        <form className='loginForm'>
            <input placeholder='Username' type='text'/>
            <input placeholder='Password' type='password'/>
            <FormButton text='Log In'/>
        </form>
    </div>
);
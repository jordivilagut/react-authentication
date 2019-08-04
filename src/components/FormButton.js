import React from 'react';

export const FormButton = props => (
    <button className={props.css} type='button' onClick={props.click}>{props.text}</button>
);
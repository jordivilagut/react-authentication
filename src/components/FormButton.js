import React from 'react';

export const FormButton = props => (
    <button type='button' onClick={props.click}>{props.text}</button>
);
import React from 'react';

export const Dashboard = props => (
    <div>
        <p>Dashboard</p>
        <p>User: {JSON.parse(props.authentication.user).username}</p>
    </div>
);

//TODO - Store state as object, no need to parse after (read about storing objects as state, is it possible?)
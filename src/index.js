/*
State and Lifecycle
Source:
https://reactjs.org/docs/state-and-lifecycle.html
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props)
{
    return (
        <div>
            <h1>It is {props.date.toLocaleTimeString()}</h1>
        </div>
    );
}

function tick()
{
    root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
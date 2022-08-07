/*
State and Lifecycle
Source:
https://reactjs.org/docs/state-and-lifecycle.html
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

/*
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

*/

//Concerting the above function into a class


class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString(),
        }
    }

    //Lifecycle methods

    //Mounting: when the clock renderes to the DOM first time
    componentDidMount()
    {
        this.timeID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    //Unmount: DOM produces by the clock is removed
    componentWillUnmount()
    {
        clearInterval(this.timeID);
    }

    tick()
    {
        this.setState({
            date: new Date().toLocaleTimeString(),
        });
    }

    render()
    {
        return(
            <div>
                <h1>It is {this.state.date}</h1>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Clock />);
/*
Handling Events
Source:
https://reactjs.org/docs/handling-events.html
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

class Toggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isOn: true,
        };

        // this.setButtonValue = this.setButtonValue.bind(this);
    }

    /*
    setButtonValue(){} will not bind the handler
    but the below method will
    */
    setButtonValue = () =>
    {
        this.setState(prev => ({
            isOn: !prev.isOn,
        }));
    }

    render(){
        return(
            <button onClick={this.setButtonValue}>
                {this.state.isOn ? 'On' : 'Off'}
            </button>
        );
    }
}

//preventDefault react way
function Form()
{
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log('Clicked submit');
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const form_div = ReactDOM.createRoot(document.getElementById('form'));

root.render(<Toggle />);
root.render(<Form />);
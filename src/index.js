/*
Lifting State Up
Source:
https://reactjs.org/docs/lifting-state-up.html
*/

import React from 'react';
import ReactDOM from 'react-dom/client';



function BoilingVerdict(props)
{
    const temperature = props.celsius;
    if(temperature >= 100)
        return <p>The water would boil</p>;
    
        return <p>The water would not boil</p>;
}

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {temperature: ''};
    }

    handleChance = (event)=>
    {
        this.setState({temperature: event.target.value});
    }

    render()
    {
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature here.</legend>
                <input value={temperature} onChange={this.handleChance}></input>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);
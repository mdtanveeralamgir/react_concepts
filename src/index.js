/*
Forms
Source:
https://reactjs.org/docs/forms.html
subject:
controlled components
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

class NameForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value:'',
            messageLengthMsg: 'Short'
        };

    }

    handleChange = (event)=>
    {
        let message = event.target.value;
        this.setState({value: message});
        if(message.length < 3)
            this.setState({messageLengthMsg: 'Short'});
        else if(message.length > 10)
            this.setState({messageLengthMsg: 'Long'});
        else
            this.setState({messageLengthMsg: 'OK'});
    }

    handleSubmit = (event)=>
    {
        alert('Name submitted: '+ this.state.value);
        event.preventDefault();
    }

    render()
    {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
            <p style={this.style}>{this.state.messageLengthMsg}</p>
            </div>
        );
    }

}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);
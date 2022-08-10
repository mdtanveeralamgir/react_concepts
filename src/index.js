/*
Composition vs Inheritance
Source:
https://reactjs.org/docs/composition-vs-inheritance.html
*/

import React from 'react';
import ReactDOM from 'react-dom/client';


function FancyBorder(props)
{
  return(
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children};
    </div>
  );
}

function WelcomeDialog()
{
  return(
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>Welcome</h1>
      <p className='Dialog-message'>Thank you for visiting our spacecraft!!</p>
    </FancyBorder>
  )
}

function Dialog(props)
{
  return(
    <FancyBorder color='blue'>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      login: ''
    }
  }

  handleChange = (event)=>
  {
    this.setState({login: event.target.value});
  }

  handleSignUp = ()=>
  {
    alert(`Welcome aboard, ${this.state.login}`);
  }

  render()
  {
    return(
      <Dialog title='Mars exploration program' message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange}></input>
        <button onClick={this.handleSignUp}>Sign me up!</button>
      </Dialog>
    );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUpDialog />);
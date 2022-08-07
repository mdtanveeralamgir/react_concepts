/*
Source:
*/

import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

function UserGreeting(props)
{
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props)
{
    return <h1>Please login first!</h1>;
}

function Greeting(props)
{
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
    {
        return <UserGreeting />;
    }
    else
    {
        return <GuestGreeting />;
    }
}



function LoginButton(props)
{
    return(
        <button onClick={props.onClick}>Login</button>
    );
     
}

function LogoutButton(props)
{
    return(
        <button onClick={props.onClick}>Logout</button>
    );
     
}


class LoginControl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= { isLoggedIn: false };
    }

    handleLoginClick = () =>
    {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = ()=>
    {
        this.setState({isLoggedIn: false});
    }

    render()
    {
        const isLoggedIn = this.state.isLoggedIn;

        let button;

        if(isLoggedIn)
        {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else
        {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        
            return(
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                </div>
            );
        }
    }

//if the condition is true print the next condition else do nothing
function Mailbox(props)
{
    const unreadMessages = props.unreadMessages;
    return(
        <div>

       {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} messages to read!</h1>}
        </div>
    );
}

//Preventing component from rendering
function WarningBanner(props)
{
    if(!props.warn)
    {
        return null;
    }

    return(
        <div className='warning'>
            warning!
        </div>
    );
}

class Page extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showWarning: true};
    }

    handleToggleClick = ()=>
    {
        this.setState(state => ({
            showWarning: !state.showWarning
          }));
    }

    render()
    {
        return(
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

class a extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }


const messages = ['react', 'dom', 'html', 'css'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
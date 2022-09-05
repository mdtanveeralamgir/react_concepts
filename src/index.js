/*
High Order Component
Source:
https://reactjs.org/docs/higher-order-components.html
*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import ClickCounter from './ClickCounter';



// class ClickCounter extends React.Component
// {
//     render()
//     {
//         return (
//             <button>
//                 Click
//             </button>
//         )
//     }
// }

// class ShowCounter extends React.Component
// {
//     render()
//     {
//         return (
//             <h1>
//                 Show
//             </h1>
//         )
//     }
// }

class Display extends React.Component
{
    render()
    {
        return(
            <ClickCounter />
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display />);
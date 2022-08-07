/*
Components and Props
Source:
- Basic of components and props:
https://reactjs.org/docs/components-and-props.html#function-and-class-components
- Detailed component API reference: 
https://reactjs.org/docs/react-component.html

*/

import React from 'react';
import ReactDOM from 'react-dom/client';

//Function components
function Welcome(props) //props = properties
{
    return <h2>Hello, {props.name}</h2>;
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const element = <Welcome name="Sara" />;
root.render(element);

//Class components
// class Welcome extends React.Component
// {
//     render()
//     {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }


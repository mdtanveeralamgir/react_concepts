/*
source:

https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element

*/

import ReactDOM from 'react-dom/client';

//Updating the Rendered Element

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function tick()
{
    const element = (
        <div>
            <h1>This is {new Date().toLocaleTimeString()}</h1>
        </div>
    );

    root.render(element);
}

setInterval(tick, 1000);
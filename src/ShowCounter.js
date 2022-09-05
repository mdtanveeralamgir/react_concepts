import React from 'react';
import withComponent from './withCounter';

class ShowCounter extends React.Component
{

    render()
    {
        return (
            <h1>{this.props.count}</h1>
        )
    }
}

export default ShowCounter
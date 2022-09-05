import React from 'react';
import withComponent from './withCounter'
import ShowCounter from './ShowCounter';



class ClickCounter extends React.Component
{
    render()
    {
        return (
            <>
            <button onClick={this.props.increment}>
                clicked {this.props.count} times
            </button>
            <ShowCounter count={this.props.count} />
            </>
        )
    }
}

export default withComponent(ClickCounter)
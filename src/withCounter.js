import React from 'react';

const withComponent =  (WrappedComponent) =>
{
    class WithCounter extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.incrementCount = this.incrementCount.bind(this);
            this.state = {
                counter: 0
            }
        }

        // incrementCount = () =>
        // {
        //     return "<h1><";
        // }
        incrementCount()
        {
            this.setState(prevState => {
                return { counter: prevState.counter + 1}
            })
        }

        render()
        {
            return(
                <WrappedComponent count={this.state.counter} increment={this.incrementCount}/>
            )
        }
    }

    return WithCounter
}

export default withComponent

import React from 'react';

// Functional components are also called stateless componenets
// They are easier to write and take properties or props that are passed from the parent component
// They can not set the state or use life cycle hooks
const Count = (props) => {
    return (
        <h1>Count: {props.counter}</h1>
    )
}

export default Count;
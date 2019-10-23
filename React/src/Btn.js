import React from 'react';

const Btn = (props) => {
    return (
        <button onClick={props.onClick}>{props.btnType}</button>
    )
}

export default Btn;
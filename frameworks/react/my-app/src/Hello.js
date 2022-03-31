import React from 'react';
import './Hello.css'

function Hello(props) {
    const name = 'Yuna';
    return (
        <>
        <p>{props.name}</p>
        <div>
            <h2>{props.message}</h2>
        </div>
        </>
    );
}

export default Hello;
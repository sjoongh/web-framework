import React from 'react';
import './Hello.css'

// props로 부모로부터 받은 데이터 활용
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
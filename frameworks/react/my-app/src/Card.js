import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useHistory } from 'react-router-dom'

function Card(props) {
 
  let history = useHistory();
  const titleOK = () => { history.push(`/detail/${props.i}`) }

  const [message, setMessage] = useState("이거보여요");

  useEffect(() => {
    // fetch('https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json') // ajax통신서버
    axios('https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json')
    .then((result) => {
      console.log(result.data);
    })
    .then((message) => {
      setMessage(message);
    })
    .catch(() => {
      console.log('fail!');
    })
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <img src='https://raw.githubusercontent.com/ai-edu-pro/busan/main/t' + ( props.i + 1) + '.jpg' alt="티셔츠" width="100%" /> */}
          {/* <img src={'https://raw.githubusercontent.com/ai-edu-pro/busan/main/t1.jpg' } /> */}
          <Link to={`detail/${props.i}`}>
            <img
              src={
                `https://raw.githubusercontent.com/ai-edu-pro/busan/main/t` +
                (props.i + 1) +
                `.jpg`
              }
              alt="티셔츠"
              width="100%"
            />
          </Link>

          <h4 onClick={ titleOK } style={{ cursor: 'pointer' }}>
            {props.shrit.title}
          </h4>
          <h6>{props.shrit.content}</h6>
          <p>{props.shrit.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

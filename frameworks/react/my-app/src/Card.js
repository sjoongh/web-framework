import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Card(props){

    let history = useHistory();
    const titleOK = ()=> {history.push(`/detail/${props.i}`)}
    const [message, setMessage] = useState("이거보여요"); 

    // useEffect(()=>{
    //   //fetch("https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json") // ajax 통신
    //   axios("https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json")
    //   .then((result)=>{
    //     console.log(result.data); // 객체로 변환

    //   })  // 성공했을때
    //   // .then((message)=> {
    //   //   setMessage(message)
    //   // })
    //   .catch(()=>{
    //     console.log('fail!!');
    //   }) // 실패했을 때
    // },[])
    // debugger
    return(
      <>
        <div className="col-md-4">
        <Link to={"detail/" +(props.i)}>
            <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (props.i+1)+".jpg"} alt="shirt" width="100%" />
        </Link>
        
        <h4 onClick={titleOK} style={{cursor:'pointer'}}>{props.shirt.title}</h4> 
        <h5>{props.shirt.content}</h5>
        <h6>{props.shirt.price}</h6>

        </div>
      </>
    )
  }
  
  export default Card;
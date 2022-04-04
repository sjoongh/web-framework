import React from "react";

function Card(props){

    // debugger
    return(
      <>
        <div className="col-md-4">
        <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (props.i+1)+".jpg"} alt="shirt" width="100%" />
          <h4>{props.shirt.title}</h4> 
          <h5>{props.shirt.content}</h5>
          <h6>{props.shirt.price}</h6>
  
        </div>
      </>
    )
  }
  
  export default Card;
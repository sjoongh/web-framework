function Card(props) {
  const url ="/detail/" + props.i
  return (
    
      <div className="col-md-4"> 
            <a href={url}><img src={`https://raw.githubusercontent.com/ai-edu-pro/busan/main/t${props.i + 1}.jpg`}  width="100%"  />
            </a>
            <h4>{ props.shrit.title }</h4>
            <h6>{props.shrit.content}</h6>
            <p>{props.shrit.price}</p>
      </div>
    
  );
}
export default Card;
import React from "react";
import {Table} from 'react-bootstrap';
import {connect, useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'

function Cart(props) {

    let state = useSelector((state) => state);
    console.log(state.reducer);
    let dispatch = useDispatch();
    // const datas = props.reducer;
    // const reducerClose = props.reducerClose;
    return(
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량 </th>
                <th>변경</th>
                </tr>
            </thead>
            <tbody>

                {/* {props.state.map((item, i)=>{ */}
                
                {state.reducer.map((item, i)=>{
                    return(
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quan}</td>
                            <td><button onClick={()=>{dispatch({type: "INCREASE", i: item.id})}}>+</button></td>
                            <td><button onClick={()=>{dispatch({type: "DECREASE", i: item.id})}}>-</button></td>
                            
                        </tr>
                    )
                })}
            </tbody>
            </Table>
            {props.close ? (
                    <div className="my-alert-yellow">
                    <p>신규 구매하는 분들에게는 30% DC</p>
                    <button className="btn btn-primary"
                    onClick={()=> {
                        props.dispatch({type : "alertClose"})
                    }}>    
                        닫기
                    </button>
                </div>
                ): (
                    <></>
                )} 

        </div>
    )
}

function stateStatus(state){ // index.js에서 store가 파라미터 state로 들어감
    console.log(state);
    // return state;
    return{
        state:state.reducer,
        close:state.reducerClose
    }

}

export default connect(stateStatus)(Cart);
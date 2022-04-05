import React from 'react';
import { useState } from "react";
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import Data from './data';

let myBox = styled.div`
    padding: 20px;
`;

let MyTitle = styled.h3`
    font-size: 25px;
    color: ${props=> props.color};
`

function Detail({match}){
    let [shrit, setShrit] = useState(Data);
    let { id } = useParams();
    let history = useHistory();
    
    return(
        <div className='container'>
            <myBox>
                안녕하세요.
                반갑습니다.
            </myBox>
            <div className="row">
                <div className='col-md-6'>
                    <img src={`https://raw.githubusercontent.com/ai-edu-pro/busan/main/t${match.params.index}.jpg`} width="100%" alt="" />
                </div>
            </div>
            <div>
                <h1>{match.params.index}</h1>
                <h4>{shrit[match.params.index].title}</h4>
                <p>{shrit[match.params.index].content}</p>
                <p>{shrit[match.params.index].price}</p>
                <button className="btn btn-primary">주문하기</button>
                <button onClick={() => {history.push('/')}} className="btn btn-danger">뒤로가기</button>
            </div>
        </div>

    );
}
export default Detail;
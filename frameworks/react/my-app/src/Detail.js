import React from 'react';
import { useState } from "react";
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import Data from './data';

let MyBox = styled.div`
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
                <MyTitle color="blue">안녕하세요</MyTitle>
                <MyTitle color={'red'}>반갑습니다.</MyTitle>
            </myBox>
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            
            <div className="row">
                <div className='col-md-6 red'>
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
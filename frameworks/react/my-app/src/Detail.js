import React, { useContext, useEffect, useState } from "react";
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'
import Update from "./Change";
import './Detail.scss'
import { Nav } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {connect} from 'react-redux'

let MyBox = styled.div`
    padding:20px;
`;

let MyTitle = styled.h3`
    font-size: 25px;
    color: ${props=>props.color};
`;

function Detail(props) {

    let history = useHistory();
    let { id } = useParams();
    let search = props.shirt.find((item)=>{
        return item.id == id;
    });
    // 탭버튼 누른 상태 변화 제어
    let [clickTab, setClickTab] = useState(0);

    // 적용된 애니메이션 켜고 끄기
    let [ani, setAni] = useState(false);

    return(
        <>
        <div className="container">

            <Update />
            <MyBox>
                안녕하세요.
                <MyTitle color="blue">반갑습니다.</MyTitle>
                <MyTitle color={'red'}>안녕히가세요.</MyTitle>
                <h4>328482374</h4>
            </MyBox>
            
            <div className="row">
                <div className="col-md-12">
                    <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t" + (search.id +1) + ".jpg"} alt= "shirt" width="100%"></img>
                </div>
            </div>
            <div className="red">
                <h4>{search.title}</h4> 
                <h5>{search.content}</h5>
                <h6>{search.price}</h6>
                <Infomation invent={props.invent[search.id]} />
                <button className="btn btn-danger"
                onClick={()=>{
                    props.dispatch({
                        type : "ADD",
                        listNo : search.id,
                        listTitle : search.title
                    })
                    .then(
                        window.confirm("주문되셨습니다. 장바구니 가시겠습니까?") ? (
                            history.push("/cart")
                        ) : (
                            <></>
                        )
                    )
                }}
                >주문하기</button>
                <button onClick={()=>{history.goBack()}}className="btn btn-danger">뒤로가기</button>
                <button onClick={()=>{history.push("/")}}className="btn btn-danger">홈</button>
            
            </div>
        </div>
        <div className="mt-5">
            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setClickTab(0)}}>환불정책</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={()=>{setClickTab(1)}}>교환방법</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={()=>{setClickTab(2)}}>상품평</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={ani} className="tabcxt" timeout={500}>
            <Tabcontrol clickTab = {clickTab} setAni = {setAni}/>
            </CSSTransition>
        </div>


        </>


            );
}

function Tabcontrol(props){
    
    useEffect(()=>{
        props.setAni(true); // 탭 내용 컴포넌트가 로드될 때 true
    })

    if(props.clickTab === 0){
        return <div className="tabfont mt-3">제품 하자 있을 시 돈 돌려드립니다.</div>
    } else if(props.clickTab === 1){
        return <div className="tabfont mt-3">제품이 마음에 안들면 같은 값에 원하는 제품 교환 가능</div>
    } else if(props.clickTab === 2){
        return <div className="tabfont mt-3">좋아요 ~ 완전 좋아요.</div>
    }

}


function Infomation(props){
    return(
        <p>재고 : { props.invent }</p>
    )
}

export default connect()(Detail)
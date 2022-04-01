import React, { useState } from 'react';
import './App.css';
// import MyModal from './Commponent/MyModal';

function App() { // return의 ()는 가독성을 위해 넣어줌, 안 넣어도 잘 돌아감
  let value = { color: 'blue', fontSize: '15px'};
  let [title, setTitle]  = useState(['강촌 소고기 맛집', '송파 샤브샤브 맛집', '홍대 일식집']);
  // 숫자 0은 초기값을 의미. useState는 인자로 초기 state 설정값을 하나 받는다. 이 초기값은 첫 번째 렌더링 시에 딱 한 번 사용
  let [like, setLike] = useState(0);
  let [flag, setFlag] = useState(false); // 첫번째 원소는 상태값이고, 두번째 원소는 상태를 업데이트하는 함수
  // 수시로 변경되는 데이터 useState

  let nickName = 'kingsmile';

  function titleChange(){
    var newTitle = [...title];
    newTitle[0] = '센텀 고기 맛집';
    setTitle(newTitle);
  }

  function titleSort(){
    var titleSort = [...title];
    titleSort = title.sort();
    setTitle(titleSort);
  }

  function onoff() {
    this.setFlag({ flag: !this.state.Modal})
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>나의 소소한 일상 소개</div>
      </div>
      <div style={ value }  >{ nickName } 님 어서오세요!!!</div>

      <button onClick={ titleChange }>0번째 제목 변경</button>
      <button onClick={ titleSort }>제목 오름차순 정렬</button>
      <div className="list">
        <h3>{ title[0] } <span onClick={ ()=>{ setLike( ok + 1) } }>👍</span> { ok } </h3>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ () => { setFlag(true) }}>{ title[2] } </h3>
        <p>3월 22일 발행</p>
        <hr/>
      </div>
      <button onClick={ ()=>{ onoff() } }>Modal ON/OFF</button>

      {
        flag === true 
        ? <Modal></Modal>
        : null
      }
      
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;


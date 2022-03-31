import './App.css';
import React, { useState } from 'react';
// import MyModal from './Commponent/MyModal';

function App() { // return의 ()는 가독성을 위해 넣어줌, 안 넣어도 잘 돌아감
  let nicName = "kingsmile";
  let value = { color: 'blue', fontSize: '15px'};
  let [title, setTitle] = useState(['신촌 샤브샤브', '홍대 샤브샤브맛집', '강남 삼겹살맛집']);
  // 숫자 0은 초기값을 의미. useState는 인자로 초기 state 설정값을 하나 받는다. 이 초기값은 첫 번째 렌더링 시에 딱 한 번 사용
  let [like, setLike] = useState(0); // 첫번째 원소는 상태값이고, 두번째 원소는 상태를 업데이트하는 함수
  // 수시로 변경되는 데이터 useState

  let [flag, setFlag] = useState(false);
  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = '서대문 맛집 리스트';
    setTitle(newTitle);
  }

  function onoff () {
    setFlag({ flag: MyModal() })
  }

  // <Hello name="React" />로 자식에 데이터 전달
  return (
    <div className="App">
      <div className="nav">
        <div>나의 소소한 일상 소개</div>
      </div>

        <div style={value}>{nicName}님 어서오세요</div>
        <div className="list">
          <button onClick={ changeTitle }>제목 변경</button>
          <h3>{ title[0] } <span onClick={ () => { setLike(like+1) } }>hey</span> { like } </h3>
          <p>3월 30일 발행</p>
        </div>
        <div className="list">
          <h3>{ title[1] }</h3>
          <p>3월 30일 발행</p>
        </div>
        <div className="list">
          <h3 onClick= { () => { setFlag(true) } }>{ title[2] }</h3>
          <p>3월 30일 발행</p>
        </div>

        <button onClick={ () => { onoff() } }>Modal ON/OFF</button>

        {
          flag === true
          ? <MyModal />
          : null
        }
    </div>
  );

  function MyModal() {
    return (
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
    );
}

function MyComponent() {
  return (
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}
}



export default App;

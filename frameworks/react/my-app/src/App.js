import './App.css';
import React, { useState } from 'react';

function App() { // return의 ()는 가독성을 위해 넣어줌, 안 넣어도 잘 돌아감
  let nicName = "kingsmile";
  let value = { color: 'blue', fontSize: '15px'};
  let [title, setTitle] = useState('신촌 샤브샤브');
  let [like, setLike] = useState(0);
  // 수시로 변경되는 데이터 useState
  // 부모->자식 데이터 전달 props
  return (
    // <Hello name="React" />
    <div className="App">
      <div className="nav">
        <div>나의 소소한 일상 소개</div>
        <div style={value}>{nicName}님 어서오세요</div>
        </div>
        
        <div className="list">
          <h3>{title[0]} <span>{ setLike }</span> { like } </h3>
          <p>3월 30일 발행</p>
        </div>
        <div className="list">
          <h3>{title[1]}</h3>
          <p>3월 30일 발행</p>
      </div>
    </div>
  );
}

export default App;

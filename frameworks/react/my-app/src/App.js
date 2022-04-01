import React, { useState } from 'react';
import logo from './logo.svg';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div>
      <MyComponents msg={"React!!!"} age={12} />
      <MyComponents age={100} />
      <MyComponents nai={100} hi={"안녕"} />
      MyComponentFunc
    </div>
  )
}


export default App;
import React, { useState } from 'react';
import logo from './logo.svg';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div>
      <MyComponents msg={"React!!!"} age={12} />
    </div>
  )
}


export default App;
/* eslint-disable */

import { useContext, useState } from "react";
import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from './data.js'
import Card from "./Card";
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom'
import Detail from "./Detail";
import Change from "./Change";

// context는 vue에서 eventbus와 같은 역할을 수행함
// 어느곳에서도(컴포넌트) 전역변수로 사용할 수 있음
export let inventContext = React.createContext();
// let invent = useContext(inventContext);
function App(e) {
  const MyStore = React.createContext();
  let [shrit, setShrit] = useState(Data);
  let [invent, setInvent] = useState([9, 8, 12]);

  function test() {
    // promise방식의 axios사용
    axios.get('https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json')
    .then((res) => {
      setShrit(shirt => [...shirt, res.data]);
    }).catch(() => {
      console.log('error');
    });

    // async / await방식의 axios사용
    // 이때 async는 사용 함수 앞에 붙어있어야함
    // const test = await axios.get('https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json')
  }

  return (
    <div className="App">
      <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">여성의류 쇼핑몰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/0">상세페이지</Nav.Link>
            <NavDropdown title="드롭메뉴" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/cart">Cart</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <Switch>
      <Route exact path="/">
      <div className="jumbotron">
        <p className="jp">
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      
     {/* <div>
      <Change />
     </div> */}
     <inventContext.Provider value={invent}>
      <div className="container" >
        <div className="row">
          <div className="col">
            {
              shrit.map((a, i) => {
                return  <Card shrit={shrit[i]} i={i} key={i} />
              })
            }
          </div>
        </div>
      </div>
      </inventContext.Provider>
      </Route>

      <Route  path="/detail/:id">
      <inventContext.Provider value={invent}>
        <Detail shrit={shrit} invent={invent}   />
        </inventContext.Provider>
      </Route>
     
      <Route path="/cart">
        <div>장바구니</div>
      </Route>
    </Switch>

    <button className="btn btn-primary"
      onClick={ test }>더보기</button>
    </div>
    </div>
  );
}

export default App;

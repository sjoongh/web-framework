/* eslint-disable */

import { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from './data.js'
import Card from "./Card";
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom'
import Detail from "./Detail";
import Change from "./Change";

function App(e) {

  let [shrit, setShrit] = useState(Data);

  async function test() {
    await axios.get('https://raw.githubusercontent.com/ai-edu-pro/busan/main/data2.json')
    .then((res) => {
      setShrit(shirt => [...shirt, res.data]);
    });
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
      </Route>

      <Route  path="/detail/:id">  
        <Detail shrit={shrit}  />
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

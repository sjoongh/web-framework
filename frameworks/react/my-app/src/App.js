/* eslint-disable */

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Jumbotron} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Data from './data.js'
import Card from './Card.js'
import {BrowserRouter} from 'react-router-dom'


function App() {

  let [shirt, setShirt] = useState(Data);

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <div className = "jumbotron">
    <p className="jp">
      <Button variant="primary">Learn more</Button>
    </p>
  </div>
  <div className="container">
    <div className="row">
      {
        shirt.map((a, i)=>{
          return (
          <Card shirt={shirt[i]} i={i} key={i}/>
          );
        })
      }
  </div>
    </div>
    </div>
  );
}
  // <div className="container">
  //   <div className="row">
  //     <div className="col-md-4">
  //       <img src="https://imgc.1300k.com/aaaaaib/goods/215025/24/215025240993.jpg?3" alt="shrit" />
  //       <h4>상품명</h4>
  //       <p>상품정보</p>
  //       <p>가격</p>
  //     </div>
  //     <div className="col-md-4">
  //     <img src="https://imgc.1300k.com/aaaaaib/goods/215025/24/215025240993.jpg?3" alt="shrit" />
  //     <h4>상품명</h4>
  //       <p>상품정보</p>
  //       <p>가격</p>
  //     </div>
  //     <div className="col-md-4">
  //     <img src="https://imgc.1300k.com/aaaaaib/goods/215025/24/215025240993.jpg?3" alt="shrit" />
  //     <h4>상품명</h4>
  //       <p>상품정보</p>
  //       <p>가격</p>
  //     </div>
  //   </div>
  // </div>
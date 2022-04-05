import { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from './data.js';
import Card from './Card';
import Detail from './Detail';

import { Link, Route, Switch} from 'react-router-dom';
function App() {

  let [shrit, setShrit] = useState(Data)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">여성의류 쇼핑몰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">상세페이지</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/cart">Cart</Link></NavDropdown.Item>
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
            abcd
            <p className="jp">
              <Button variant="primary">Learn more</Button>
            </p>
          </div>       
          <div className="container">
            <div className="row">
              {
                shrit.map((item, index) => {
                  return  <Card shrit={shrit[index]} i={index} key={index} />
                })
              };         
            </div>
          </div>
        </Route>
        <Route path="/detail/:id" component={Detail} >          
        </Route>
        <Route exact path="/cart">
          <Card />
        </Route>
      </Switch>

    </div>
  );
}
export default App;
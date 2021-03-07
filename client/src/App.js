import React,{useState} from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Register from './components/Register/Register';
import StoreCard from './components/StoreCard/StoreCard';
import logo from './components/Home/assets/logo-foody.svg';
import iconAvatar from './components/Home/assets/img-avatar.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
      <Navbar color="light" light expand="md" className="container">
          <NavbarBrand href="/"><img src={logo} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem>
              <NavLink href="/">Giới Thiệu</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/order">Đặt Món</NavLink>
              </NavItem>  
              <NavItem>
              <NavLink href="/store">Giỏ Hàng</NavLink>
              </NavItem>
          </Nav>
          <NavbarText>Nguyễn Thanh Thiên <img src={iconAvatar} alt="avatar"/></NavbarText>
          </Collapse>
      </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/store">
            <StoreCard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

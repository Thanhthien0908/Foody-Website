import React,{useState} from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Order from '../Order/Order';
import Register from '../Register/Register';
import StoreCard from '../StoreCard/StoreCard';
import logo from '../Home/assets/logo-foody.svg';
import iconAvatar from '../Home/assets/img-avatar.svg';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,NavbarText,UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
function App() {
  let history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.replace("/login");
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (<>
    <Router>
      <div className="menu">
      <Navbar color="light" light expand="md" className="container">
          <NavbarBrand href="/"><img src={logo} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem>
              <Link to="/">Giới Thiệu</Link>
              </NavItem>
              <NavItem>
              <Link to="/order">Đặt Món</Link>
              </NavItem>  
              <NavItem>
              <Link to="/store">Giỏ Hàng</Link>
              </NavItem>
          </Nav>
          <NavbarText>
            <UncontrolledDropdown className="dropdown-lang">
              <DropdownToggle nav caret>
                  <span>Nguyễn Thanh Thiên <img src={iconAvatar} alt="avatar"/></span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={onLogout}>
                  Đăng Xuất
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
          </Collapse>
      </Navbar>
      {/* <ul>
        <li><Link to="/" /></li>
      </ul> */}
      <MessengerCustomerChat
        pageId="101315142049056"
        appId="127955015818933"
      />
      </div>
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
        
    </Router>
    
    </>
  );
}

export default App;

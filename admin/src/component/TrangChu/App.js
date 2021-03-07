import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo-foody.svg';
import iconOverView from './assets/overview.svg';
import iconAvatar from './assets/img-avatar.svg';
import iconAcc from './assets/accout.svg';
import iconBookMarks from './assets/bookmarks.svg';
import iconStore from './assets/cart-fill.svg';
import iconLogout from './assets/box-arrow-left.svg';
import iconDropDown from './assets/caret-down.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-3 nav-menu">
        <nav>
          <ul>
            <li>
              <img src={logo} alt="logo"/>
              <div><img src={iconAvatar} alt="avatar"/> Nguyễn Thanh Thiên</div>
              <hr />
            </li>
            <li>
              <Link to="/"><img src={iconOverView} alt="iconOverView"/> Thống Kê</Link>
            </li>
            <li>
              <img src={iconAcc} alt="iconAcc"/> Quản lý tài khoản <img src={iconDropDown} alt="iconDrop"/>
                <ul>
                  <li><Link to="/">Tài khoản admin</Link></li>
                  <li><Link to="/">Tài khoản user</Link></li>
                </ul>
            </li>
            <li>
              <img src={iconBookMarks} alt="iconDanhMuc"/> Quản lý danh mục <img src={iconDropDown} alt="iconDrop"/>
                <ul>
                  <li><Link to="/">Đồ ăn</Link></li>
                  <li><Link to="/">Đồ uống</Link></li>
                  <li><Link to="/">Combo</Link></li>
                </ul>
            </li>
            <li>
              <Link to="/about"><img src={iconStore} alt="iconStore"/> Quản lý Kho</Link>
            </li>
            <li>
              <Link to="/users"><img src={iconLogout} alt="iconLogout"/> Đăng xuất</Link>
            </li>
          </ul>
        </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="col-9">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

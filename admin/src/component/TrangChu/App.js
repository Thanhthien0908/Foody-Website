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
  Link,
  useHistory
} from "react-router-dom";
import OverView from '../OverView';
import AccAdmin from '../AccAdmin';
import AccUser from '../AccUser';
import DanhMucDoAn from '../DanhMucDoAn';
import DanhMucDoUong from '../DanhMucDoUong';
import DanhMucCombo from '../DanhMucCombo';
import QuanLyKho from '../QuanLyKho';
function App() {
  let history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.replace("/login");
  }
  return (
    <Router>
      <div className="row body">
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
                  <li><Link to="/tai-khoan-admin">Tài khoản admin</Link></li>
                  <li><Link to="/tai-khoan-user">Tài khoản user</Link></li>
                </ul>
            </li>
            <li>
              <img src={iconBookMarks} alt="iconDanhMuc"/> Quản lý danh mục <img src={iconDropDown} alt="iconDrop"/>
                <ul>
                  <li><Link to="/danh-muc-do-an">Đồ ăn</Link></li>
                  <li><Link to="/danh-muc-do-uong">Đồ uống</Link></li>
                  <li><Link to="/danh-muc-combo">Combo</Link></li>
                </ul>
            </li>
            <li>
              <Link to="/quan-ly-kho"><img src={iconStore} alt="iconStore"/> Quản lý Kho</Link>
            </li>
            <li>
              <Link to="#" onClick={onLogout}><img src={iconLogout} alt="iconLogout"/> Đăng xuất</Link>
            </li>
          </ul>
        </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="col-9 content">
          <Switch>
            <Route path="/tai-khoan-admin">
              <AccAdmin />
            </Route>
            <Route path="/tai-khoan-user">
              <AccUser />
            </Route>
            <Route path="/danh-muc-do-an">
              <DanhMucDoAn />
            </Route>
            <Route path="/danh-muc-do-uong">
              <DanhMucDoUong />
            </Route>
            <Route path="/danh-muc-combo">
              <DanhMucCombo />
            </Route>
            <Route path="/quan-ly-kho">
              <QuanLyKho />
            </Route>
            <Route path="/">
              <OverView />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/TrangChu/App';
// import Login from './component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useEffect, useState } from 'react';
import './style.scss'
import iconUser from './assets/icon-user.svg'
import iconUnlock from './assets/icon-unlock.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
const Login = () => {
    let history = useHistory();
    const responseFacebook = (response) => {
        // setLogInFace(response.accessToken)
        console.log(response);
    }
    const onLogin = () => {
        const userName = document.getElementById('userName').value;
        const passWord = document.getElementById('passWord').value;
        if (userName === "thiennt" && passWord === "123456") {
            localStorage.setItem("accessToken", true);
            history.replace("/");
        }else {
            Modal.error({
                title: 'Đăng nhập thất bại !',
                content: 'Tên tài khoản hoặc mật khẩu không đúng ? ',
            });
        }
    }
    const moveRegister = () => {
        history.replace("/register")
    }
    useEffect(() => {
        AOS.init({
            offset: 200,
            delay: 0,
            duration: 1000,
        });
    }, []);
    return (
        <div className="screen-login">
            <div className="screen-login__title">Foody Login</div>
            <div className="screen-login__user" data-aos="fade-right">
                <table className="screen-login__user__group">
                    <tr>
                        <td><input className="screen-login__user__input" type="text" id="userName" placeholder="Tên đăng nhập" /></td>
                        <td><img className="screen-login__user__icon" src={iconUser} alt="icon_user" /></td>
                    </tr>
                </table>
            </div>
            <div className="screen-login__lock" data-aos="fade-left">
                <table className="screen-login__lock__group">
                    <tr>
                        <td><input className="screen-login__lock__input" type="password" id="passWord" placeholder="Mật Khẩu" /></td>
                        <td><img className="screen-login__lock__icon" src={iconUnlock} alt="icon_password" /></td>
                    </tr>
                </table>
            </div>
            <div className="screen-login__button">
                <table className="screen-login__button__group">
                    <tr>
                        <td><button className="screen-login__button__login" data-aos="fade-right" onClick={onLogin}>Login</button></td>
                        {/* <td><button className="screen-login__button__register" data-aos="fade-left" onClick={moveRegister}>Register</button></td> */}
                    </tr>
                    <tr>
                        <FacebookLogin
                            appId="127955015818933"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook} />
                    </tr>
                </table>
            </div>
            <div className="screen-login__copyright">
                <p>&#169; 2021 Foody All Rights Reserved Site by Thiennt</p>
            </div>
        </div>
    );
};
export default Login;
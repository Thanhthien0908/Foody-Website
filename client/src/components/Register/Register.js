import React from 'react';
import './styles.scss'
import iconUser from './assets/icon-user.svg'
import iconUnlock from './assets/icon-unlock.svg'
import iconPhone from './assets/icon-phone.svg'
import iconAddress from './assets/icon-address.svg'
const Register = () => {
    return (
        <div className="screen-register">
            <div className="screen-register__title">Foody Login</div>
            <div className="screen-register__user">
                <table className="screen-register__user__group">
                    <tr>
                        <td><input className="screen-register__user__input" type="text" placeholder="Tên đăng nhập"/></td>
                        <td><img className="screen-register__user__icon" src={iconUser} alt="icon_user"/></td>
                    </tr>
                </table>
            </div>
            <div className="screen-register__lock">
                <table className="screen-register__lock__group">
                    <tr>
                        <td><input className="screen-register__lock__input" type="password" placeholder="Mật Khẩu"/></td>
                        <td><img className="screen-register__lock__icon" src={iconUnlock} alt="icon_password"/></td>
                    </tr>
                </table>
            </div>
            <div className="screen-register__lock">
                <table className="screen-register__lock__group">
                    <tr>
                        <td><input className="screen-register__lock__input" type="password" placeholder="Nhập Lại mật khẩu"/></td>
                        <td><img className="screen-register__lock__icon" src={iconUnlock} alt="icon_password"/></td>
                    </tr>
                </table>
            </div>
            <div className="screen-register__lock">
                <table className="screen-register__lock__group">
                    <tr>
                        <td><input className="screen-register__lock__input" type="text" placeholder="Số điện thoại"/></td>
                        <td><img className="screen-register__lock__icon" src={iconPhone} alt="icon_password"/></td>
                    </tr>
                </table>
            </div>
            <div className="screen-register__lock">
                <table className="screen-register__lock__group">
                    <tr>
                        <td><input className="screen-register__lock__input" type="text" placeholder="Địa chỉ"/></td>
                        <td><img className="screen-register__lock__icon" src={iconAddress} alt="icon_password"/></td>
                    </tr>
                </table>
            </div>
            <div className="screen-register__button">
                <table className="screen-register__button__group">
                    <tr>
                        <td><button className="screen-register__button__login">Login</button></td>
                        <td><button className="screen-register__button__register">Register</button></td>
                    </tr>
                </table>
            </div>
            <div className="screen-register__copyright">
                <p>&#169; 2021 Foody All Rights Reserved Site by Thiennt</p>
            </div>
        </div>
    );
};
export default Register;
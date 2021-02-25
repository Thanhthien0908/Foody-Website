import React,{useEffect} from 'react';
import iconFaceBook from './assets/icon-fb.svg';
import iconInstagram from './assets/icon-insta.svg';
import iconTwitter from './assets/icon-twitter.svg';
import iconYoutube from './assets/icon-youtube.svg';
import Logo from './assets/logo-foody.svg';
import './styles.scss'
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(() => {
        AOS.init({
        offset: 200,
        delay: 0,
        duration: 1000,
        });
        }, []);
    return (
        <div>
            <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col" data-aos="fade-right">
                        <img src={Logo} alt="logo-footer"/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4736630784314!2d105.73291811445512!3d21.053735992302173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2sHanoi%20University%20of%20Industry!5e0!3m2!1sen!2s!4v1614259130402!5m2!1sen!2s" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>    
                    </div>
                    <div className="col footer__item" data-aos="fade-up">
                        <p>Thông tin</p>
                        <p><a href="#">Giới Thiệu</a></p>
                        <p><a href="#">Khuyến mãi</a></p>
                        <p><a href="#">Tuyển dụng</a></p>
                        <p><a href="#">Tin tức</a></p>
                    </div>
                    <div className="col" data-aos="fade-up">
                        <p>Hỗ Trợ</p>
                        <p><a href="#">Điều Khoản sử dụng</a></p>
                        <p><a href="#">Chính sách bảo mật</a></p>
                        <p><a href="#">Chính sách giao hàng</a></p>
                        <p><a href="#">Liên hệ</a></p>
                    </div>
                    <div className="col" data-aos="fade-left">
                        <p>Theo dõi chúng tôi</p>
                        <a href="https://www.facebook.com/"><img src={iconFaceBook} alt="icon-fa"/></a>
                        <a href="https://www.instagram.com/"><img src={iconInstagram} alt="icon-insta"/></a>
                        <a href="https://twitter.com/"><img src={iconTwitter} alt="img-twitter"/></a>
                        <a href="https://www.youtube.com/"><img src={iconYoutube} alt="img-youtube"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>&#169; 2021 Foody All Rights Reserved Site by Thiennt</p>
        </div>
        </div>
    );
};
export default Footer;
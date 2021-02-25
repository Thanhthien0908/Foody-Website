import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarG from '../NavbarG/NavbarG';
import Footer from '../Footer/Footer';
import Logo from './assets/logo-foody.svg';
import imgLogo from './assets/img-logo.svg';
import imgMaxim from './assets/img-maxim.svg';
import imgAddress from './assets/img-address.svg';
import iconStory from './assets/icon-story.svg';
import iconServices from './assets/icon-services.svg';
import iconProtect from './assets/icon-protec.svg';
import iconTime from './assets/icon-time.svg';

const Home = (props) => {

    useEffect(() => {
        AOS.init({
        offset: 200,
        delay: 0,
        duration: 1000,
        });
        }, []);
    return (<>
        <div className="bg-banner">
            <NavbarG />
        </div>
        <div className="introduce">
            <img src={Logo} alt="logo"/>
            <h1 className="introduce__title">Giới thiệu về chúng tôi</h1>
            <img src={imgLogo} alt="bigLogo"/>
            <div className="container introduce__content" data-aos="fade-up">
                <p>Foody là chuỗi nhà hàng thức ăn nhanh trực thuộc tập đoàn Foody – một trong năm tập đoàn lớn nhất Hàn Quốc. Suốt 7 năm liền đứng vị trí số 1 về “Brand Power”, được cấp bởi “ Korea Management Association”, và được chọn là vị trí số 1 về năng lực cạnh tranh thương hiệu với danh hiệu “Brand Stock” của cơ quan đánh giá giá trị thương hiệu.</p>
                <br />
                <p>Trong suốt thời gian qua, Foody đã nỗ lực không ngừng để cung cấp cho khách hàng các dịch vụ chu đáo, ân cần và không ngừng nghiên cứu để phát triển nền văn hóa ẩm thực tốt cho sức khoẻ. Hơn nữa, để đảm bảo vệ sinh, an toàn thực phẩm và bảo vệ môi trường, Foody tự hào đạt được các chứng nhận quốc tế như:</p>
                <br />
                <p>- An toàn thực phẩm (RVA HACCP)</p>
                <p>- Vệ sinh môi trường (ISO 14001)</p>
                <p>- Chất lượng sản phẩm (ISO 9001)</p>
                <br />
                <p>Foody có mặt tại thị trường Việt Nam từ năm 1998. Hiện nay, mang tầm vóc của doanh nghiệp quốc tế, Foody đang dẫn đầu ngành công nghiệp ăn uống quốc nội với hơn 210 nhà hàng tại hơn 30 tỉnh/thành trên cả nước. Đây là kết quả của những nỗ lực không ngừng mà Foody đạt được.</p>
            </div>
        </div>
        <div className="maxim">
            <h1 className="maxim__title" data-aos="fade-up">Châm ngôn của chúng tôi</h1>
            <div className="container">
                <div className="row">
                    <div className="col" data-aos="fade-right">
                        <img src={imgMaxim} alt="imgMaxim"/>
                    </div>
                    <div className="col" data-aos="fade-left">
                        <div className="row row-top">
                            <div className="col bg-maxim-item">
                                <div className="row maxim-item">
                                    <div className="col-7 maxim-item__index">
                                        01
                                    </div>
                                    <div className="col-5">
                                        <img src={iconStory} alt="img-story"/>
                                    </div>
                                </div>
                                <div className="row maxim-item__description">
                                    <p>Chất lượng</p>
                                    <p className="maxim-item__description__note">Luôn cung cấp sản phẩm tốt nhất</p>
                                </div>
                            </div>
                            <div className="col bg-maxim-item">
                                <div className="row maxim-item">
                                    <div className="col-7 maxim-item__index">
                                        02
                                    </div>
                                    <div className="col-5">
                                        <img src={iconServices} alt="img-story"/>
                                    </div>
                                </div>
                                <div className="row maxim-item__description">
                                    <p>Dịch vụ</p>
                                    <p className="maxim-item__description__note">Tươi cười mang cảm giác thân thiện cho khách hàng</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col bg-maxim-item">
                                <div className="row maxim-item">
                                    <div className="col-7 maxim-item__index">
                                        03
                                    </div>
                                    <div className="col-5">
                                        <img src={iconProtect} alt="img-story"/>
                                    </div>
                                </div>
                                <div className="row maxim-item__description">
                                    <p>Bảo vệ môi trường</p>
                                    <p className="maxim-item__description__note">Đặt tiêu chí vệ sinh trong cửa hàng lên hàng đầu</p>
                                </div>
                            </div>
                            <div className="col bg-maxim-item">
                                <div className="row maxim-item">
                                    <div className="col-7 maxim-item__index">
                                        04
                                    </div>
                                    <div className="col-5">
                                        <img src={iconTime} alt="img-story"/>
                                    </div>
                                </div>
                                <div className="row maxim-item__description">
                                    <p>Thời gian</p>
                                    <p className="maxim-item__description__note">Phục vụ nhanh hạnh chế thời gian chờ lâu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="address">
            <h1 className="address__title" data-aos="fade-up">Địa chỉ của chúng tôi</h1>
            <div className="container">
                <div className="row">
                    <div className="col" data-aos="fade-right">
                        <img src={imgAddress} alt="img-address"/>
                    </div>
                    <div className="col" data-aos="fade-left">
                            <h2 className="address__content">Foody</h2>
                            <p>Địa chỉ: Tầng 1, Toà nhà Kangnam Mỹ Đình</p>
                            <p>Khu E6 Đô thị mới Cầu Giấy, Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội</p>
                            <p>Tel: (84-8) 345000921</p>
                            <p>Fax: (84-8) 345000921</p>
                            <p>Email: thanhthien09081999@gmail.vn</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

Home.propTypes = {};

export default Home;
import React from 'react';
import './styles.scss';
import orderItem from './assets/order-item.svg';
const TabsAll = () => {
    return (
        <div>
            <span>Sắp xếp theo giá: <select name="" id="">
                <option value="">Giá từ thấp tới cao</option>
                <option value="">Giá từ cao xuống thấp</option>
                </select>
            </span>
            <div className="row">
                <div className="col order-item">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
            </div>
        
            <div className="row">
                <div className="col order-item">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
            </div>
        
            <div className="row">
                <div className="col order-item">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
                <div className="col">
                    <img src={orderItem} alt="order-item"/>
                    <p className="order-item__name">Big Star Burger</p>
                    <p className="order-item__price">56.000 đ</p>
                    <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                </div>
            </div>
            </div>
    );
};

export default TabsAll;
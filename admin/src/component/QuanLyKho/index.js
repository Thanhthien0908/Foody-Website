import React from 'react';
import './styles.scss';
const QuanLyKho = () => {
    return (
        <div className="table-responsive">
            <h1>Quản lý Kho</h1>
            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên món ăn</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                    <th>Big Star Burger</th>
                    <th>mkmkmkm.jpg</th>
                    <th>56.000đ</th>
                    <th>Đồ ăn</th>
                </tr>
                <tr>
                <th scope="row">2</th>
                    <th>Big Star Burger + Pepsi</th>
                    <th>mkmkmkm.jpg</th>
                    <th>86.000đ</th>
                    <th>Combo</th>
                </tr>
                <tr>
                <th scope="row">3</th>
                    <th>Pepsi</th>
                    <th>mkmkmkm.jpg</th>
                    <th>20.000đ</th>
                    <th>Đồ uống</th>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default QuanLyKho;
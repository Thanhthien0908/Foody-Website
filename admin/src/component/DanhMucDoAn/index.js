import React from 'react';
import './styles.scss';
const DanhMucDoAn = () => {
    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục đồ ăn</h1>
            <button className="btn btn-success">Thêm đồ ăn</button>
            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên món ăn</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th>Big Star Burger</th>
                    <th>mkmkmkm.jpg</th>
                    <th>56.000đ</th>
                    <th>Đồ ăn</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
                <tr>
                    <th scope="row">2</th> 
                    <th>Big Star Burger</th>
                    <th>mkmkmkm.jpg</th>
                    <th>56.000đ</th>
                    <th>Đồ ăn</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default DanhMucDoAn;
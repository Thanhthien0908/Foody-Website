import React from 'react';
import './styles.scss';
const DanhMucDoUong = () => {
    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục đồ uống</h1>
            <button className="btn btn-success">Thêm đồ uống</button>
            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên đồ uống</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th>Pepsi</th>
                    <th>mkmkmkm.jpg</th>
                    <th>20.000đ</th>
                    <th>Đồ uống</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th>Pepsi</th>
                    <th>mkmkmkm.jpg</th>
                    <th>20.000đ</th>
                    <th>Đồ uống</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
                
            </tbody>
            </table>
        </div>
    );
};

export default DanhMucDoUong;
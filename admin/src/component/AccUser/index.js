import React from 'react';
import './styles.scss';
const AccUser = () => {
    return (
        <div className="table-responsive">
            <h1>Quản lý tài khoản Users</h1>
            <button className="btn btn-success">Thêm tài khoản</button>
            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên tài khoản</th>
                    <th scope="col">Mật khẩu</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th>thiennt</th>
                    <th>mkmkmkm</th>
                    <th>0345000921</th>
                    <th>Kiều mai - Bắc Từ Liêm - Hà Nội</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th>thiennt</th>
                    <th>mkmkmkm</th>
                    <th>0345000921</th>
                    <th>Kiều mai - Bắc Từ Liêm - Hà Nội</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default AccUser;
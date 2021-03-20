import React, { useState } from 'react';
import './styles.scss';
const QuanLyKho = () => {
    const [dataKho, setDataKho] = useState([
        {
            username: "Nguyễn Văn Mạnh",
            foodName: "Burger Bò Teriyaki",
            price: 31000,
            address: "Mai Dịch - Cầu Giấy - Hà Nội",
            sdt: "0345000921"
        },
        {
            username: "Nguyễn Văn Chinh",
            foodName: "Burger Cá",
            price: 34000,
            address: "Mai Dịch - Cầu Giấy - Hà Nội",
            sdt: "0345000921"
        },
        {
            username: "Hà Ngọc Đông",
            foodName: "Gà Sốt Đậu - 9 miếng",
            price: 310000,
            address: "Mai Dịch - Cầu Giấy - Hà Nội",
            sdt: "0345000921"
        },
        {
            username: "Phạm Ngọc Tuân",
            foodName: "Gà Rán - 9 miếng",
            price: 310000,
            address: "Mai Dịch - Cầu Giấy - Hà Nội",
            sdt: "0345000921"
        },
        {
            username: "Nguyễn Đình Đạt",
            foodName: "Burger Phô Mai",
            price: 31000,
            address: "Mai Dịch - Cầu Giấy - Hà Nội",
            sdt: "0345000921"
        }
    ])
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="table-responsive">
            <h1>Quản lý Kho</h1>
            <table className="table product-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên người đặt</th>
                        <th scope="col">Tên món ăn</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataKho.map((item, index) =>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <th>{item.username}</th>
                                <th className="long-term">{item.foodName}</th>
                                <th>{formatNumber(item.price)} vnđ</th>
                                <th>{item.sdt}</th>
                                <th>{item.address}</th>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default QuanLyKho;
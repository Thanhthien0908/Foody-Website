import React, { useState } from 'react';
import './styles.scss';
import { message } from 'antd';
const DanhMucDoAn = () => {
    const [openForm, setopenForm] = useState(false);
    const [dataDoAn, setDataDoAn] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/t/e/teriyaki-burger_4.png",
            foodName: "Burger Bò Teriyaki",
            price: 31000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_fish_5.png",
            foodName: "Burger Cá",
            price: 34000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/a/ga_sot_dau_9_pcs_1.jpg",
            foodName: "Gà Sốt Đậu - 9 miếng",
            price: 310000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_r_n_3_6_9_mi_ng_2.jpg",
            foodName: "Gà Rán - 9 miếng",
            price: 310000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_cheese_10.png",
            foodName: "Burger Phô Mai",
            price: 31000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_bulgogi_4.png",
            foodName: "Bulgogi Burger",
            price: 44000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_n_ng_s_t_hs_s_cay_3_6_9_mi_ng_3.jpg",
            foodName: "Gà HS - 9 miếng",
            price: 310000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_kim_sa__nh_website_3.jpg",
            foodName: "Gà Kim Sa - 9 Miếng",
            price: 310000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_premium-chicken_4.png",
            foodName: "Burger Bò Trứng",
            price: 44000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_premium-chicken_4.png",
            foodName: "Burger Gà Thượng Hạng",
            price: 44000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_n_ng_2.png",
            foodName: "Gà nướng - 9 miếng",
            price: 310000,
            type: "Đồ ăn"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_s_t_ph_mai_3_6_9_mi_ng_2.jpg",
            foodName: "Gà Sốt Phô Mai - 9 miếng",
            price: 310000,
            type: "Đồ ăn"
        }

    ]);
    const [objItems, setobjItems] = useState({
        foodName: '',
        urlImg: '',
        price: '',
        type: ''
    });
    const showForm = () => {
        setopenForm(!openForm);
    }
    const onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        setobjItems({ ...objItems, [name]: value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const food = document.getElementById("foodName").value;
        const url = document.getElementById("urlImg").value;
        const price = document.getElementById("price").value;
        const type = document.getElementById("type").value;
        if (food !== "" && url !== "" && price !== "" && type !== "") {
            setDataDoAn([...dataDoAn, objItems]);
            message.success('Món ăn đã được thêm thành công !');
            setobjItems({
                foodName: '',
                urlImg: '',
                price: '',
                type: ''
            })
        }else{
            message.error("Bạn phải điền đủ thông tin!");
        }

    }
    const onDelete = (index) => {
        setDataDoAn(dataDoAn.splice(0, index).concat(dataDoAn.splice(index + 1)));
        console.log(dataDoAn);
    }

    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục Món ăn</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm Món ăn</button>
            {/* <Form className={openForm ? "openForm" : "hideForm"}> */}

            <form onSubmit={onSubmit} className={openForm ? "openForm" : "hideForm"}>
                <label className="label-input">FoodName : </label><br />
                <input className="inputForm" id="foodName" type="text" name="foodName" value={objItems.username} onChange={onChange} /><br />

                <label className="label-input">Ảnh : </label><br />
                <input className="inputForm" id="urlImg" type="text" name="urlImg" value={objItems.pass} onChange={onChange} /><br />

                <label className="label-input">Giá : </label><br />
                <input className="inputForm" id="price" type="text" name="price" value={objItems.sdt} onChange={onChange} /><br />

                <label className="label-input">Loại Sản phẩm : </label><br />
                <input className="inputForm" id="type" type="text" name="type" value={objItems.address} onChange={onChange} /><br />

                <button type="submit" className="btn-save btn btn-danger">Lưu</button>
            </form>

            <table className="table product-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Món ăn</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Loại</th>
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {dataDoAn.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <th>{item.foodName}</th>
                                <th class="long-term">{item.urlImg}</th>
                                <th>{item.price}</th>
                                <th>{item.type}</th>
                                <th><button className="btn btn-danger" onClick={() => onDelete(index)}>Xóa</button></th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DanhMucDoAn;
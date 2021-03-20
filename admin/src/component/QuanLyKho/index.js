import React, { useState } from 'react';
import './styles.scss';
const QuanLyKho = () => {
    const [dataKho, setDataKho] = useState([
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
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/o/r/orangejuice_4.png",
            foodName: "Nước Cam",
            price: 28000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_cherry.jpg",
            foodName: "7 Up Cherry",
            price: 25000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_rose.jpg",
            foodName: "7 Up Rose",
            price: 25000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/i/milo.png",
            foodName: "Milo",
            price: 25000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/j/sjora_4.jpg",
            foodName: "Nước Xoài Đào",
            price: 25000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/_/c_ph_s_a.jpg",
            foodName: "Cà Phê Sữa",
            price: 20000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/_/c_ph_en.jpg",
            foodName: "Cà Phê Đen",
            price: 20000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_1.jpg",
            foodName: "7 UP (L)",
            price: 18000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/n/e/nestea.png",
            foodName: "Nestea",
            price: 18000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/p/e/pepsi_4.png",
            foodName: "Pepsi (L)",
            price: 18000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/z/2/z2054228259338_f983ac7b886fccbe1772ccc551532ca2_1.jpg",
            foodName: "Pepsi Zero",
            price: 18000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/i/mirinda.jpg",
            foodName: "Mirinda (M)",
            price: 14000,
            type: "Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_big-star_4.png",
            foodName: "Big Star Burger Combo",
            price: 84000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_shrimp_4.png",
            foodName: "Combo Burger Tôm",
            price: 77000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_bulgogi_4.png",
            foodName: "Bulgogi Burger Combo",
            price: 74000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_b_tr_ng_74k.jpg",
            foodName: "Combo Burger Bò Trứng",
            price: 74000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_premium-chicken_4.png",
            foodName: "Combo Burger Gà Thượng Hạng",
            price: 74000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_fish_4.png",
            foodName: "Combo Burger Cá",
            price: 64000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_cheese_4.png",
            foodName: "Combo Burger Phô Mai",
            price: 64000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_teriyaki_4.png",
            foodName: "Combo Burger Bò Teriyaki",
            price: 61000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/u/super_jumbo_set.png",
            foodName: "Super Jumbo Burger",
            price: 68000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii.jpg",
            foodName: "Hawaii Burger",
            price: 68000,
            type: "ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/o/mozzarella.png",
            foodName: "Mozzarella Burger",
            price: 68000,
            type: "ComBo"
        }
    ])
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
                    {
                        dataKho.map((item, index) =>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <th>{item.foodName}</th>
                                <th className="long-term">{item.urlImg}</th>
                                <th>{item.price}</th>
                                <th>{item.type}</th>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default QuanLyKho;
import React,{useState} from 'react';
import './styles.scss';
const TabsCombo = () => {
    const [dataCombo, setdataCombo] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_big-star_4.png",
            comboName: "Big Star Burger Combo",
            price: 84000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_shrimp_4.png",
            comboName: "Combo Burger Tôm",
            price: 77000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_bulgogi_4.png",
            comboName: "Bulgogi Burger Combo",
            price: 74000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_b_tr_ng_74k.jpg",
            comboName: "Combo Burger Bò Trứng",
            price: 74000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_premium-chicken_4.png",
            comboName: "Combo Burger Gà Thượng Hạng",
            price: 74000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_fish_4.png",
            comboName: "Combo Burger Cá",
            price: 64000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_cheese_4.png",
            comboName: "Combo Burger Phô Mai",
            price: 64000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_teriyaki_4.png",
            comboName: "Combo Burger Bò Teriyaki",
            price: 61000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/u/super_jumbo_set.png",
            comboName: "Super Jumbo Burger",
            price: 68000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii.jpg",
            comboName: "Hawaii Burger",
            price: 68000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/o/mozzarella.png",
            comboName: "Mozzarella Burger",
            price: 68000
        },
        
    ]);
    console.log(dataCombo);
    return (
        <div>
            <span>Sắp xếp theo giá: <select name="" id="">
                <option value="">Giá từ thấp tới cao</option>
                <option value="">Giá từ cao xuống thấp</option>
                </select>
            </span>
            <div className="row">
                {
                    dataCombo.map((item,index) =>
                        <div className="col-3 order-item">
                            <img src={item.urlImg} alt="order-item"/>
                            <p className="order-item__name">{item.comboName}</p>
                            <p className="order-item__price">{item.price} đ</p>
                            <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                        </div>
                    )
                }
            </div>
        </div>    
    );
};

export default TabsCombo;
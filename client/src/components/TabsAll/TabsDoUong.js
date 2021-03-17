import React,{useState} from 'react';
import './styles.scss';
const TabsDoUong = () => {
    const [dataDoUong, setdataDoUong] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/o/r/orangejuice_4.png",
            drinkName: "Nước Cam",
            price: 28000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_cherry.jpg",
            drinkName: "7 Up Cherry",
            price: 25000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_rose.jpg",
            drinkName: "7 Up Rose",
            price: 25000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/i/milo.png",
            drinkName: "Milo",
            price: 25000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/j/sjora_4.jpg",
            drinkName: "Nước Xoài Đào",
            price: 25000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/_/c_ph_s_a.jpg",
            drinkName: "Cà Phê Sữa",
            price: 20000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/_/c_ph_en.jpg",
            drinkName: "Cà Phê Đen",
            price: 20000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_1.jpg",
            drinkName: "7 UP (L)",
            price: 18000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/n/e/nestea.png",
            drinkName: "Nestea",
            price: 18000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/p/e/pepsi_4.png",
            drinkName: "Pepsi (L)",
            price: 18000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/z/2/z2054228259338_f983ac7b886fccbe1772ccc551532ca2_1.jpg",
            drinkName: "Pepsi Zero",
            price: 18000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/i/mirinda.jpg",
            drinkName: "Mirinda (M)",
            price: 14000
        },
        
    ]);
    console.log(dataDoUong);
    return (
        <div>
            <span>Sắp xếp theo giá: <select name="" id="">
                <option value="">Giá từ thấp tới cao</option>
                <option value="">Giá từ cao xuống thấp</option>
                </select>
            </span>
            <div className="row">
                {
                    dataDoUong.map((item,index) =>
                        <div className="col-3 order-item">
                            <img src={item.urlImg} alt="order-item"/>
                            <p className="order-item__name">{item.drinkName}</p>
                            <p className="order-item__price">{item.price} đ</p>
                            <center><button className="order-item__btn">Thêm vào giỏ hàng</button></center>
                        </div>
                    )
                }
            </div>
        </div>    
    );
};

export default TabsDoUong;
import React,{useState} from 'react';
import {actInsertProduct} from './../../action/index';
import {connect} from 'react-redux';
import { message } from 'antd';
import './styles.scss';
const TabsDoAn = ({item, onInsertProduct}) => {
    console.log("store product",item);
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const [dataDoAn, setDataDoAn] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/t/e/teriyaki-burger_4.png",
            foodName: "Burger Bò Teriyaki",
            price: 31000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_fish_5.png",
            foodName: "Burger Cá",
            price: 34000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/a/ga_sot_dau_9_pcs_1.jpg",
            foodName: "Gà Sốt Đậu - 9 miếng",
            price: 310000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_r_n_3_6_9_mi_ng_2.jpg",
            foodName: "Gà Rán - 9 miếng",
            price: 310000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_cheese_10.png",
            foodName: "Burger Phô Mai",
            price: 31000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_bulgogi_4.png",
            foodName: "Bulgogi Burger",
            price: 44000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_n_ng_s_t_hs_s_cay_3_6_9_mi_ng_3.jpg",
            foodName: "Gà HS - 9 miếng",
            price: 310000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_kim_sa__nh_website_3.jpg",
            foodName: "Gà Kim Sa - 9 Miếng",
            price: 310000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_premium-chicken_4.png",
            foodName: "Burger Bò Trứng",
            price: 44000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger_premium-chicken_4.png",
            foodName: "Burger Gà Thượng Hạng",
            price: 44000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_n_ng_2.png",
            foodName: "Gà nướng - 9 miếng",
            price: 310000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/g/_/g_s_t_ph_mai_3_6_9_mi_ng_2.jpg",
            foodName: "Gà Sốt Phô Mai - 9 miếng",
            price: 310000
        }
    ]);
    const insertItem = (item) => {
        onInsertProduct(item);
        message.success('Món ăn đã được thêm vào giỏ hàng !');
    }   
    const handleChange = (e) =>{   
        let currentOption = e.target.value;
        if(currentOption === "up"){
            setDataDoAn([...dataDoAn.sort((a, b) => a.price - b.price)])
            
        }else{
            setDataDoAn([...dataDoAn.sort((a, b) => b.price - a.price)])
        }
    }
    return (
        <div>
            <span className="title-filter">Sắp xếp theo giá</span> <select onChange={handleChange}>
            <option value="" 
                >-- Chọn Sắp Xếp Theo Giá --</option>
                <option value="up" 
                >-- Giá từ thấp tới cao --</option>
                <option value="down" 
                >-- Giá từ cao xuống thấp --</option>
                </select>
            <div className="row">
                {
                    dataDoAn.map((item,index) =>
                        <div className="col-3 order-item">
                            <img src={item.urlImg} alt="order-item"/>
                            <p className="order-item__name">{item.foodName}</p>
                            <p className="order-item__price">{formatNumber(item.price)} đ</p>
                            <center><button className="order-item__btn" onClick={() => insertItem(item)}>Thêm vào giỏ hàng</button></center>
                        </div>
                    )
                }
            </div>
        </div>    
    );
};

const mapStateToProps = (state) =>{
    return {
        item: state
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onInsertProduct : (item) =>{
            dispatch(actInsertProduct(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TabsDoAn);
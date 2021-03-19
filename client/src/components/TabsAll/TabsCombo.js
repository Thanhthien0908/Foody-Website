import React,{useState} from 'react';
import {actInsertProduct} from './../../action/index';
import {connect} from 'react-redux';
import { message } from 'antd';
import './styles.scss';
const TabsCombo = ({item, onInsertProduct}) => {
    const [dataCombo, setdataCombo] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_big-star_4.png",
            foodName: "Big Star Burger Combo",
            price: 84000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_shrimp_4.png",
            foodName: "Combo Burger Tôm",
            price: 77000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_bulgogi_4.png",
            foodName: "Bulgogi Burger Combo",
            price: 74000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_b_tr_ng_74k.jpg",
            foodName: "Combo Burger Bò Trứng",
            price: 74000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_premium-chicken_4.png",
            foodName: "Combo Burger Gà Thượng Hạng",
            price: 74000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_fish_4.png",
            foodName: "Combo Burger Cá",
            price: 64000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_cheese_4.png",
            foodName: "Combo Burger Phô Mai",
            price: 64000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_teriyaki_4.png",
            foodName: "Combo Burger Bò Teriyaki",
            price: 61000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/u/super_jumbo_set.png",
            foodName: "Super Jumbo Burger",
            price: 68000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii.jpg",
            foodName: "Hawaii Burger",
            price: 68000
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/o/mozzarella.png",
            foodName: "Mozzarella Burger",
            price: 68000
        },
        
    ]);
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    console.log(dataCombo);
    const insertItem = (item) => {
        onInsertProduct(item);
        message.success('Combo đã được thêm vào giỏ hàng !');
    } 
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

export default connect(mapStateToProps,mapDispatchToProps)(TabsCombo);
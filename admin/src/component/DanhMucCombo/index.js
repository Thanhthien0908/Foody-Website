import React,{useState} from 'react';
import './styles.scss';
import { message } from 'antd';
const DanhMucCombo = () => {
    const [openForm, setopenForm] = useState(false);
    const [dataCombo, setDataCombo] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_big-star_4.png",
            foodName: "Big Star Burger Combo",
            price: 84000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_shrimp_4.png",
            foodName: "Combo Burger Tôm",
            price: 77000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_bulgogi_4.png",
            foodName: "Bulgogi Burger Combo",
            price: 74000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_b_tr_ng_74k.jpg",
            foodName: "Combo Burger Bò Trứng",
            price: 74000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_premium-chicken_4.png",
            foodName: "Combo Burger Gà Thượng Hạng",
            price: 74000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_fish_4.png",
            foodName: "Combo Burger Cá",
            price: 64000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_cheese_4.png",
            foodName: "Combo Burger Phô Mai",
            price: 64000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/o/combo_teriyaki_4.png",
            foodName: "Combo Burger Bò Teriyaki",
            price: 61000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/u/super_jumbo_set.png",
            foodName: "Super Jumbo Burger",
            price: 68000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii.jpg",
            foodName: "Hawaii Burger",
            price: 68000,
            type:"ComBo"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/o/mozzarella.png",
            foodName: "Mozzarella Burger",
            price: 68000,
            type:"ComBo"
        },
        
    ]);
    const [objItems, setobjItems] = useState({
        foodName: '',
        urlImg: '',
        price: '',
        type: ''
    });
    const showForm = () =>{
        setopenForm(!openForm);
    }
    const onChange = (e) =>{
        let target = e.target;
        let name = target.name;
        let value = target.value;
        setobjItems({...objItems,[name]: value});
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const food = document.getElementById("foodName").value;
        const url = document.getElementById("urlImg").value;
        const price = document.getElementById("price").value;
        const type = document.getElementById("type").value;
        if (food !== "" && url !== "" && price !== "" && type !== "") {
            setDataCombo([...dataCombo, objItems]);
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
    const onDelete = (index) =>{
        setDataCombo(dataCombo.slice(0,index).concat(dataCombo.slice(index+1)));
        console.log(dataCombo);
    } 
    
    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục Combo</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm Combo</button>
            {/* <Form className={openForm ? "openForm" : "hideForm"}> */}
               
            <form onSubmit={onSubmit} className={openForm ? "openForm" : "hideForm"}>
                <label className="label-input">FoodName : </label><br />
                <input className="inputForm" id="foodName" type="text" name="foodName" value={objItems.username} onChange={onChange}/><br />
                
                <label className="label-input">Ảnh : </label><br />
                <input className="inputForm" id="urlImg" type="text" name="urlImg" value={objItems.pass} onChange={onChange}/><br />
                
                <label className="label-input">Giá : </label><br />
                <input className="inputForm" id="price" type="text" name="price" value={objItems.sdt} onChange={onChange}/><br />
                
                <label className="label-input">Loại Sản phẩm : </label><br />
                <input className="inputForm" id="type" type="text" name="type" value={objItems.address} onChange={onChange}/><br />   
                <button type="submit" className="btn-save btn btn-danger">Lưu</button>
            </form>

            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên Combo</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {dataCombo.map((item,index) => {
                    return (
                        <tr>
                        <th scope="row">{index+1}</th>
                        <th>{item.foodName}</th>
                        <th class="long-term">{item.urlImg}</th>
                        <th>{item.price}</th>
                        <th>{item.type}</th>
                        <th><button className="btn btn-danger" onClick={()=>onDelete(index)}>Xóa</button></th>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
};

export default DanhMucCombo;
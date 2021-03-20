import React,{useState} from 'react';
import './styles.scss';
import { message } from 'antd';
const DanhMucDoUong = () => {
    const [openForm, setopenForm] = useState(false);
    const [dataDouong, setDataDoUong] = useState([
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/o/r/orangejuice_4.png",
            foodName: "Nước Cam",
            price: 28000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_cherry.jpg",
            foodName: "7 Up Cherry",
            price: 25000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_rose.jpg",
            foodName: "7 Up Rose",
            price: 25000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/i/milo.png",
            foodName: "Milo",
            price: 25000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/s/j/sjora_4.jpg",
            foodName: "Nước Xoài Đào",
            price: 25000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/_/c_ph_s_a.jpg",
            foodName: "Cà Phê Sữa",
            price: 20000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/c/_/c_ph_en.jpg",
            foodName: "Cà Phê Đen",
            price: 20000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/7/_/7_up_1.jpg",
            foodName: "7 UP (L)",
            price: 18000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/n/e/nestea.png",
            foodName: "Nestea",
            price: 18000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/p/e/pepsi_4.png",
            foodName: "Pepsi (L)",
            price: 18000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/z/2/z2054228259338_f983ac7b886fccbe1772ccc551532ca2_1.jpg",
            foodName: "Pepsi Zero",
            price: 18000,
            type:"Đồ uống"
        },
        {
            urlImg: "https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/m/i/mirinda.jpg",
            foodName: "Mirinda (M)",
            price: 14000,
            type:"Đồ uống"
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
            setDataDoUong([...dataDouong, objItems]);
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
        setDataDoUong(dataDouong.slice(0,index).concat(dataDouong.slice(index+1)));
        console.log(dataDouong);
    } 
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục Đồ uống</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm Đồ uống</button>
            {/* <Form className={openForm ? "openForm" : "hideForm"}> */}
               
            <form onSubmit={onSubmit} className={openForm ? "openForm" : "hideForm"}>
                <label className="label-input">DrinkName : </label><br />
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
                    <th scope="col">Tên đồ uống</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {dataDouong.map((item,index) => {
                    return (
                        <tr>
                        <th scope="row">{index+1}</th>
                        <th>{item.foodName}</th>
                        <th class="long-term">{item.urlImg}</th>
                        <th>{formatNumber(item.price)} vnđ</th>
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

export default DanhMucDoUong;
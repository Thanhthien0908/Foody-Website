import React,{useState} from 'react';
import './styles.scss';

const DanhMucDoUong = () => {
    const [openForm, setopenForm] = useState(false);
    const [dataDouong, setDataDoUong] = useState([
        {
            foodname: "Pepsi",
            img: "mkmkmkm.jpg",
            price: "86.000đ",
            type: "Đồ uống"
        },
        {
            foodname: "Pepsi",
            img: "mkmkmkm.jpg",
            price: "86.000đ",
            type: "Đồ uống"
        }
        
    ]);
    const [objItems, setobjItems] = useState({
        foodname: '',
        img: '',
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
        setDataDoUong([...dataDouong,objItems]);
        // console.log(dataAccAdmin);
        // localStorage.setItem("accAdmin",JSON.stringify(dataAccAdmin));
        setobjItems({
            foodname: '',
            img: '',
            price: '',
            type: ''
        })
    }
    const onDelete = (index) =>{
        setDataDoUong(dataDouong.splice(0,index).concat(dataDouong.splice(index+1)));
        console.log(dataDouong);
    } 
    
    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục Đồ uống</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm Đồ uống</button>
            {/* <Form className={openForm ? "openForm" : "hideForm"}> */}
               
            <form onSubmit={onSubmit} className={openForm ? "openForm" : "hideForm"}>
                <label className="label-input" for="fname">DrinkName : </label><br />
                <input className="inputForm" type="text" name="foodname" value={objItems.username} onChange={onChange}/><br />
                <label className="label-input" for="fname">Ảnh : </label><br />
                <input className="inputForm" type="text" name="img" value={objItems.pass} onChange={onChange}/><br />
                <label className="label-input" for="fname">Giá : </label><br />
                <input className="inputForm" type="text" name="price" value={objItems.sdt} onChange={onChange}/><br />
                <label className="label-input" for="fname">Loại Sản phẩm : </label><br />
                <input className="inputForm" type="text" name="type" value={objItems.address} onChange={onChange}/><br />   
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
                        <th>{item.foodname}</th>
                        <th>{item.img}</th>
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

export default DanhMucDoUong;
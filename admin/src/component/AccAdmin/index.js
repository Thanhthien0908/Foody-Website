import React,{useState} from 'react';
import './styles.scss';

const AccAdmin = () => {
    const [openForm, setopenForm] = useState(false);
    const [dataAccAdmin, setDataAccAdmin] = useState([
        {
            username: "thiennt",
            pass: "1234",
            sdt: "0345000921",
            address: "HN"
        },
        {
            username: "thienNguyen",
            pass: "123456",
            sdt: "0345000921",
            address: "HN"
        }
    ]);
    const [objItems, setobjItems] = useState({
        username: '',
        pass: '',
        sdt: '',
        address: ''
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
        setDataAccAdmin([...dataAccAdmin,objItems]);
        // console.log(dataAccAdmin);
        // localStorage.setItem("accAdmin",JSON.stringify(dataAccAdmin));
        setobjItems({
            username: '',
            pass: '',
            sdt: '',
            address: ''
        })
    }
    const onDelete = (index) =>{
        setDataAccAdmin(dataAccAdmin.slice(0,index).concat(dataAccAdmin.slice(index+1)));
        console.log(dataAccAdmin);
    } 
    
    return (
        <div className="table-responsive">
            <h1>Quản lý tài khoản Admins</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm tài khoản</button>
            {/* <Form className={openForm ? "openForm" : "hideForm"}> */}
               
            <form onSubmit={onSubmit} className={openForm ? "openForm" : "hideForm"}>
                <label className="label-input" for="fname">UserName : </label><br />
                <input className="inputForm" type="text" name="username" value={objItems.username} onChange={onChange}/><br />
                <label className="label-input" for="fname">Password : </label><br />
                <input className="inputForm" type="text" name="pass" value={objItems.pass} onChange={onChange}/><br />
                <label className="label-input" for="fname">Số điện thoại : </label><br />
                <input className="inputForm" type="text" name="sdt" value={objItems.sdt} onChange={onChange}/><br />
                <label className="label-input" for="fname">Địa Chỉ : </label><br />
                <input className="inputForm" type="text" name="address" value={objItems.address} onChange={onChange}/><br />   
                <button type="submit" className="btn-save btn btn-danger">Lưu</button>
            </form>

            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên tài khoản</th>
                    <th scope="col">Mật khẩu</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {dataAccAdmin.map((item,index) => {
                    return (
                        <tr>
                        <th scope="row">{index+1}</th>
                        <th>{item.username}</th>
                        <th>{item.pass}</th>
                        <th>{item.sdt}</th>
                        <th>{item.address}</th>
                        <th><button className="btn btn-danger" onClick={()=>onDelete(index)}>Xóa</button></th>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
};

export default AccAdmin;
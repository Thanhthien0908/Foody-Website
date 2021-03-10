import React,{useState} from 'react';
import './styles.scss';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
const DanhMucDoAn = () => {
    const [openForm, setopenForm] = useState(false);
    const showForm = () =>{
        setopenForm(!openForm);
        console.log(openForm);
    }
    return (
        <div className="table-responsive">
            <h1>Quản lý danh mục đồ ăn</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm đồ ăn</button>
            <Form className={openForm ? "openForm" : "hideForm"}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Tên món ăn</Form.Label>
                    <Form.Control placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control placeholder="img" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridPhone">
                    <Form.Label>Giá</Form.Label>
                    <Form.Control placeholder="Price" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Loại</Form.Label>
                    <Form.Control placeholder="Type" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Lưu
                </Button>
                </Form>
            <table className="table product-table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên món ăn</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <th>Big Star Burger</th>
                    <th>mkmkmkm.jpg</th>
                    <th>56.000đ</th>
                    <th>Đồ ăn</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
                <tr>
                    <th scope="row">2</th> 
                    <th>Big Star Burger</th>
                    <th>mkmkmkm.jpg</th>
                    <th>56.000đ</th>
                    <th>Đồ ăn</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default DanhMucDoAn;
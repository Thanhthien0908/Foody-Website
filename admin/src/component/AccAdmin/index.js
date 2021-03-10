import React,{useState} from 'react';
import './styles.scss';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
const AccAdmin = () => {
    const [openForm, setopenForm] = useState(false);
    const showForm = () =>{
        setopenForm(!openForm);
        console.log(openForm);
    }
    return (
        <div className="table-responsive">
            <h1>Quản lý tài khoản Admins</h1>
            <button className="btn btn-success" onClick={showForm}>Thêm tài khoản</button>
            <Form className={openForm ? "openForm" : "hideForm"}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Tên Tài Khoản</Form.Label>
                    <Form.Control placeholder="Enter Acc" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mật Khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridPhone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control placeholder="Phone Number" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control placeholder="Address" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Lưu
                </Button>
                </Form>
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
                <tr>
                    <th scope="row">1</th>
                    <th>thiennt</th>
                    <th>mkmkmkm</th>
                    <th>0345000921</th>
                    <th>Kiều mai - Bắc Từ Liêm - Hà Nội</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th>thiennt</th>
                    <th>mkmkmkm</th>
                    <th>0345000921</th>
                    <th>Kiều mai - Bắc Từ Liêm - Hà Nội</th>
                    <th><button className="btn btn-primary">Sửa</button><button className="btn btn-danger">Xóa</button></th>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default AccAdmin;
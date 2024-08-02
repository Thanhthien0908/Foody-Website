import React, { useState } from "react";
import "./styles.scss";
import { actInsertProduct, actDeleteProduct } from "./../../action/index";
import { connect } from "react-redux";
const AccAdmin = ({ acc, onInsertAcc, onDeleteAcc }) => {
  const listAcc = JSON.parse(localStorage.getItem("Account") || "[]");
  const [openForm, setopenForm] = useState(false);
  const [objItems, setobjItems] = useState({
    username: "",
    pass: "",
    sdt: "",
    address: "",
  });
  const showForm = () => {
    setopenForm(!openForm);
  };
  const onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    setobjItems({ ...objItems, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertAcc(objItems);
    setobjItems({
      username: "",
      pass: "",
      sdt: "",
      address: "",
    });
  };
  const onDelete = (index) => {
    onDeleteAcc(index);
  };

  return (
    <div className="table-responsive">
      <h1>Quản lý tài khoản Admins</h1>
      <button className="btn btn-success" onClick={showForm}>
        Thêm tài khoản
      </button>
      {/* <Form className={openForm ? "openForm" : "hideForm"}> */}
      <form onSubmit={onSubmit} className={openForm ? "openForm" : "hideForm"}>
        <label className="label-input" for="fname">
          UserName :{" "}
        </label>
        <br />
        <input
          className="inputForm"
          type="text"
          name="username"
          value={objItems.username}
          onChange={onChange}
        />
        <br />
        <label className="label-input" for="fname">
          Password :{" "}
        </label>
        <br />
        <input
          className="inputForm"
          type="text"
          name="pass"
          value={objItems.pass}
          onChange={onChange}
        />
        <br />
        <label className="label-input" for="fname">
          Số điện thoại :{" "}
        </label>
        <br />
        <input
          className="inputForm"
          type="text"
          name="sdt"
          value={objItems.sdt}
          onChange={onChange}
        />
        <br />
        <label className="label-input" for="fname">
          Địa Chỉ :{" "}
        </label>
        <br />
        <input
          className="inputForm"
          type="text"
          name="address"
          value={objItems.address}
          onChange={onChange}
        />
        <br />
        <button type="submit" className="btn-save btn btn-danger">
          Lưu
        </button>
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
          {listAcc.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <th>{item.username}</th>
                <th>{item.pass}</th>
                <th>{item.sdt}</th>
                <th>{item.address}</th>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(index)}>
                    Xóa
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    acc: state,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onInsertAcc: (item) => {
      dispatch(actInsertProduct(item));
    },
    onDeleteAcc: (id) => {
      dispatch(actDeleteProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccAdmin);

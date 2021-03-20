import React, { useState } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import { actDeleteProduct, actDeleteAllProduct } from '../../action/index';
import { connect } from 'react-redux';
import { Modal, message, Form, Input } from 'antd';
function TableStoreCard({ item, onDeleteProduct, onDeleteAllProduct }) {
  let history = useHistory();
  const moveOrder = () => {
    history.replace("/order")
  }
  const total = item.reduce(
    (total, value) => total + value.price,
    0
  );
  const onDelete = (id) => {
    onDeleteProduct(id);
  }
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    if (item.length !== 0) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  };

  const handleOk = () => {
    let username = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    if (username !== "" && phone !== "" && address !== "") {
      setIsModalVisible(false);
      onDeleteAllProduct();
      message.success('Đã xác nhận người nhận !');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="table-responsive">
      <h1><center>Chi Tiết Giỏ Hàng</center></h1>
      <br />
      <table className="table product-table">
        <thead>
          <tr>
            <th />
            <th>Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Tổng Cộng</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            item.map((item, index) =>
              <tr>
                <th scope="row">
                  <img src={item.urlImg} alt="item.product.name" />
                </th>
                <td>
                  <h5>
                    <strong>{item.foodName}</strong>
                  </h5>
                </td>
                <td>{formatNumber(item.price)} đ</td>
                <th>X 1</th>
                <td>{formatNumber(item.price)} đ</td>
                <td>
                  <button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(index)}>
                    X
              </button>
                </td>
              </tr>
            )
          }

          <tr>
            <td>
              <button type="button" className="btn btn-warning" onClick={moveOrder}> &#8249; Tiếp tục đặt món
                  <i className="fa fa-angle-right right" />
              </button>
            </td>
            <td colSpan={2} />
            <td>
              <h4>
                <strong>Tổng Tiền</strong>
              </h4>
            </td>
            <td>
              <h4>
                <strong>
                  {formatNumber(total)} Đ
                </strong>
              </h4>
            </td>
            <td colSpan={3}>
              <button type="button" className="btn btn-success" onClick={showModal}>Thực hiện thanh toán &#8250;
                <i className="fa fa-angle-right right" />
              </button>
              <Modal title="Xác nhận thông tin người nhận !" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form layout='vertical' >
                  <Form.Item name="username" label='Tên người nhận:' rules={[{ required: true, message: 'Số tiền đóng thêm không được để trống' }]}>
                    <Input id="username" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item name="phonenumber" label='Số điện thoại người nhận:' rules={[{ required: true, message: 'Số tiền đóng thêm không được để trống' }]}>
                    <Input id="phone" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item name="address" label='Địa chỉ người nhận:' rules={[{ required: true, message: 'Số tiền đóng thêm không được để trống' }]}>
                    <Input id="address" style={{ width: '100%' }} />
                  </Form.Item>
                </Form>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    item: state
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: (id) => {
      dispatch(actDeleteProduct(id));
    },
    onDeleteAllProduct: () => {
      dispatch(actDeleteAllProduct());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableStoreCard);

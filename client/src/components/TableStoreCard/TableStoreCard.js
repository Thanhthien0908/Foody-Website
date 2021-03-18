import React from 'react';
import orderItem from '../TabsAll/assets/order-item.svg';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
function TableStoreCard({ item }) {
  let history = useHistory();
  const moveOrder = () => {
    history.replace("/order")
  }

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
                <td>{item.price} đ</td>
                <td className="center-on-small-only">
                  <span className="qty">3 </span>
                  <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                      className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                      <a>—</a>
                    </label>
                    <label
                      className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                      <a>+</a>
                    </label>
                  </div>
                </td>
                <td>300.000đ</td>
                <td>
                  <button type="button" className="btn btn-sm btn-danger">
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
                  {
                    item.reduce(
                      ( total, value ) => total + value.price,
                      0
                    )
                    }
                </strong>
              </h4>
            </td>
            <td colSpan={3}>
              <button type="button" className="btn btn-success">Thực hiện thanh toán &#8250;
                <i className="fa fa-angle-right right" />
              </button>
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
export default connect(mapStateToProps, null)(TableStoreCard);

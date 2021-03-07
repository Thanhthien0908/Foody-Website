import React from 'react';
import orderItem from '../TabsAll/assets/order-item.svg';
import './styles.scss';
export default function TableStoreCard() {
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
          <tr>
            <th scope="row">
              <img src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii_burger_1_2.jpg" alt="item.product.name" />
            </th>
            <td>
              <h5>
                <strong>item.product.name</strong>
              </h5>
            </td>
            <td>100.000đ</td>
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
          <tr>
            <th scope="row">
              <img src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii_burger_1_2.jpg" alt="item.product.name" />
            </th>
            <td>
              <h5>
                <strong>item.product.name</strong>
              </h5>
            </td>
            <td>100.000đ</td>
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
          <tr>
            <th scope="row">
              <img src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/h/a/hawaii_burger_1_2.jpg" alt="item.product.name" />
            </th>
            <td>
              <h5>
                <strong>item.product.name</strong>
              </h5>
            </td>
            <td>100.000đ</td>
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
          
          <tr>
            <td>
              <button type="button" className="btn btn-warning"> &#8249; Tiếp tục đặt món
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
              <strong>1.000.000đ</strong>
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

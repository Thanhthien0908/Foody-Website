import React, { useState } from "react";
import { actInsertProduct } from "./../../action/index";
import { connect } from "react-redux";
import { message } from "antd";
import "./styles.scss";
const TabsDoUong = ({ item, onInsertProduct }) => {
  const [dataDoUong, setDataDoUong] = useState([
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_organge_juice_1.png",
      foodName: "Nước Cam",
      price: 28000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_7up_m_l__3.png",
      foodName: "7 Up Cherry",
      price: 25000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_7up_m_l_.png",
      foodName: "7 Up Rose",
      price: 25000,
    },
    {
      urlImg: "https://www.lotteria.vn/media/catalog/product/l/d/ld0084_5.png",
      foodName: "Milo",
      price: 25000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/l/_/l_coffee_tra_kiwwi_chanh_da_y_1_.png",
      foodName: "Nước Xoài Đào",
      price: 25000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/l/_/l_coffee_c_ph_s_a_3.png",
      foodName: "Cà Phê Sữa",
      price: 20000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/l/_/l_coffee_c_ph_en_2.png",
      foodName: "Cà Phê Đen",
      price: 20000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_mirinda_m_l__2.png",
      foodName: "7 UP (L)",
      price: 18000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_lipton_tea.png",
      foodName: "Nestea",
      price: 18000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_pepsi_zero_m_l_.png",
      foodName: "Pepsi (L)",
      price: 18000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_pepsi_zero_m_l__2.png",
      foodName: "Pepsi Zero",
      price: 18000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/d/r/drink_mirinda_m_l__2.png",
      foodName: "Mirinda (M)",
      price: 14000,
    },
  ]);
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const insertItem = (item) => {
    onInsertProduct(item);
    message.success("Đồ uống đã được thêm vào giỏ hàng !");
  };
  const handleChange = (e) => {
    let currentOption = e.target.value;
    if (currentOption === "up") {
      setDataDoUong([...dataDoUong.sort((a, b) => a.price - b.price)]);
    } else {
      setDataDoUong([...dataDoUong.sort((a, b) => b.price - a.price)]);
    }
  };
  return (
    <div>
      <span className="title-filter">Sắp xếp theo giá</span>{" "}
      <select onChange={handleChange}>
        <option value="">-- Chọn Sắp Xếp Theo Giá --</option>
        <option value="up">-- Giá từ thấp tới cao --</option>
        <option value="down">-- Giá từ cao xuống thấp --</option>
      </select>
      <div className="row" style={{ margin: "50px 0" }}>
        {dataDoUong.map((item, index) => (
          <div className="col-3 order-item">
            <img src={item.urlImg} alt="order-item" width={200} />
            <p className="order-item__name">{item.drinkName}</p>
            <p className="order-item__price">{formatNumber(item.price)} đ</p>
            <center>
              <button
                className="order-item__btn"
                onClick={() => insertItem(item)}>
                Thêm vào giỏ hàng
              </button>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    item: state,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onInsertProduct: (item) => {
      dispatch(actInsertProduct(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsDoUong);

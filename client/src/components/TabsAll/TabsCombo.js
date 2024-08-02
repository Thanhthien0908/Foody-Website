import React, { useState } from "react";
import { actInsertProduct } from "./../../action/index";
import { connect } from "react-redux";
import { message } from "antd";
import "./styles.scss";
const TabsCombo = ({ item, onInsertProduct }) => {
  const [dataCombo, setDataCombo] = useState([
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_bulgogi_6.png",
      foodName: "Big Star Burger Combo",
      price: 84000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_shrimp_6.png",
      foodName: "Combo Burger Tôm",
      price: 77000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_l-chicken__1.png",
      foodName: "Bulgogi Burger Combo",
      price: 74000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_cheese_7.png",
      foodName: "Combo Burger Bò Trứng",
      price: 74000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_beef_teriyaki.png",
      foodName: "Combo Burger Gà Thượng Hạng",
      price: 74000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_d-double.png",
      foodName: "Combo Burger Cá",
      price: 64000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_mozzarella_2.png",
      foodName: "Combo Burger Phô Mai",
      price: 64000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_fish_6.png",
      foodName: "Combo Burger Bò Teriyaki",
      price: 61000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_beef_1.png",
      foodName: "Super Jumbo Burger",
      price: 68000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_c_m_kim_chi.png",
      foodName: "Hawaii Burger",
      price: 68000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/o/combo_b_c_m_kim_chi.png",
      foodName: "Mozzarella Burger",
      price: 68000,
    },
  ]);
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const insertItem = (item) => {
    onInsertProduct(item);
    message.success("Combo đã được thêm vào giỏ hàng !");
  };
  const handleChange = (e) => {
    let currentOption = e.target.value;
    if (currentOption === "up") {
      setDataCombo([...dataCombo.sort((a, b) => a.price - b.price)]);
    } else {
      setDataCombo([...dataCombo.sort((a, b) => b.price - a.price)]);
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
        {dataCombo.map((item, index) => (
          <div className="col-3 order-item">
            <img src={item.urlImg} alt="order-item" width={200} />
            <p className="order-item__name">{item.comboName}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabsCombo);

import React, { useState } from "react";
import { actInsertProduct } from "./../../action/index";
import { connect } from "react-redux";
import { message } from "antd";
import "./styles.scss";
const TabsDoAn = ({ item, onInsertProduct }) => {
  console.log("store product", item);
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const [dataDoAn, setDataDoAn] = useState([
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_bulgogi_4.png",
      foodName: "Burger Bò Teriyaki",
      price: 31000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_shrimp_4.png",
      foodName: "Burger Cá",
      price: 34000,
    },
    {
      urlImg: "https://www.lotteria.vn/media/catalog/product/2/2/222287_1.png",
      foodName: "Gà Sốt Đậu - 9 miếng",
      price: 310000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/c/h/chicken-534x374px_grilled-chicken_2.png",
      foodName: "Gà Rán - 9 miếng",
      price: 310000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_l-chicken_.png",
      foodName: "Burger Phô Mai",
      price: 31000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_cheese_4.png",
      foodName: "Bulgogi Burger",
      price: 44000,
    },
    {
      urlImg: "https://www.lotteria.vn/media/catalog/product/2/2/222286_4.png",
      foodName: "Gà HS - 9 miếng",
      price: 310000,
    },
    {
      urlImg: "https://www.lotteria.vn/media/catalog/product/2/2/222280_4.png",
      foodName: "Gà Kim Sa - 9 Miếng",
      price: 310000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_mozzarella.png",
      foodName: "Burger Bò Trứng",
      price: 44000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/v/a/value_b_c_m_kim_chi.png",
      foodName: "Burger Gà Thượng Hạng",
      price: 44000,
    },
    {
      urlImg: "https://www.lotteria.vn/media/catalog/product/2/2/222278_4.png",
      foodName: "Gà nướng - 9 miếng",
      price: 310000,
    },
    {
      urlImg:
        "https://www.lotteria.vn/media/catalog/product/m/e/menu_k_chciken_menu.png",
      foodName: "Gà Sốt Phô Mai - 9 miếng",
      price: 310000,
    },
  ]);
  const insertItem = (item) => {
    onInsertProduct(item);
    message.success("Món ăn đã được thêm vào giỏ hàng !");
  };
  const handleChange = (e) => {
    let currentOption = e.target.value;
    if (currentOption === "up") {
      setDataDoAn([...dataDoAn.sort((a, b) => a.price - b.price)]);
    } else {
      setDataDoAn([...dataDoAn.sort((a, b) => b.price - a.price)]);
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
        {dataDoAn.map((item, index) => (
          <div className="col-3 order-item">
            <img src={item.urlImg} alt="order-item" width={200} />
            <p className="order-item__name">{item.foodName}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabsDoAn);

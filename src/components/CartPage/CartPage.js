import React from "react";
import PropTypes from "prop-types";
import styles from "./CartPage.module.scss";
import "antd/dist/antd.min.css";
import { Empty, Button, Divider, PageHeader, Badge } from "antd";
import BookTemplate from "../BookTemplate/BookTemplate";
import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSessionStorage } from "../SessionHook";
import logo from "../../asset/logo.png";
import { useNavigate } from "react-router-dom";

const CartPage = ({ booklist, quantity, setQuantity }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useSessionStorage("cartitem", []);
  const cartbook = booklist.filter((book) => {
    if (cartItems.find((id) => book.id === id) !== undefined) {
      return true;
    }
    return false;
  });
//function for increasing book quantity on cart page 
  const addquantity = (id) => {
    let val = quantity[id];
    setQuantity({ ...quantity, [id]: val + 1 });
  };
  //function for decreasing book quantity on cart page 
  const removequantity = (id) => {
    let val = quantity[id];
    val > 1
      ? setQuantity({ ...quantity, [id]: val - 1 })
      : alert("quantity cannot be zero");
  };
  //function for deleting book item on cart page 
  const deletefromcart = (id) => {
    const newitem = cartItems.filter((val) => val != id);
    var result = window.confirm("Are you sure you want to delete this book?");
    if (result == true) {
      setCartItems(newitem);
    }
  };
//function for total book price on cart page 
  const totalprice =
    cartItems?.length >= 1
      ? cartbook
          .map((book) => book.price * quantity[book.id])
          .reduce((sum, item) => sum + item)
      : 0;

  return (
    <div className={styles.CartPage}>
      <PageHeader
        className={styles.CartPage__navBar}
        onBack={() => null}
        title={
          <div className={styles.CartPage__navBar__titleContents}>
            <img src={logo} alt="logo" onClick={() => navigate("/home")} />
          </div>
        }
        extra={[
          <div className={styles.CartPage__navBar__btnContainer}>
            <Badge count={cartItems.length}>
              <Button
                shape="circle"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <ShoppingCartOutlined />
              </Button>
            </Badge>
            <Button
              shape="circle"
              onClick={() => {
                sessionStorage.clear();
                navigate("/");
              }}
            >
              <LogoutOutlined />
            </Button>
          </div>,
        ]}
      />
      <div className={styles.CartPage__parentContainer}>
        {!cartItems?.length ? (
          <Empty
            description={<span>Oops your cart is empty!!!</span>}
            className={styles.CartPage__parentContainer__empty}
          />
        ) : (
          cartbook.map((book) => {
            return (
              <div className={styles.CartPage__parentContainer__center}>
                <BookTemplate
                  item={book}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
                {console.log("dbhjb", quantity[book.id])}
                <div
                  className={
                    styles.CartPage__parentContainer__center__btnContainer
                  }
                >
                  <Button
                    shape="round"
                    icon={<MinusOutlined />}
                    size="medium"
                    onClick={() => removequantity(book.id)}
                  />
                  <span
                    className={
                      styles.CartPage__parentContainer__center__btnContainer__quantity
                    }
                  >
                    {quantity[book.id]}
                  </span>
                  <Button
                    shape="round"
                    icon={<PlusOutlined />}
                    size="medium"
                    onClick={() => addquantity(book.id)}
                  />
                </div>
                <div
                  className={styles.CartPage__parentContainer__center__price}
                >
                  ₹ {book.price * quantity[book.id]}
                </div>
                <div
                  className={
                    styles.CartPage__parentContainer__center__deletebtn
                  }
                >
                  <Button
                    shape="round"
                    size="medium"
                    onClick={() => deletefromcart(book.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>
      {!cartItems?.length ? (
        ""
      ) : (
        <>
          <Divider className={styles.CartPage__divider} />
          <div className={styles.CartPage__costContainer}>
            <b>Grand Total</b>: ₹ {totalprice}
            <div className={styles.CartPage__costContainer__orderBtn}>
              <Button shape="round">Order Now</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
CartPage.propTypes = {};

CartPage.defaultProps = {};

export default CartPage;

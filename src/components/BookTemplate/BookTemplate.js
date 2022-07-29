import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BookTemplate.module.scss";
import { Button } from "antd";
import "antd/dist/antd.min.css";

const BookTemplate = ({
  item,
  cartItems,
  setCartItems,
  setCartCount,
  quantity,
  setQuantity,
}) => {
  const state = cartItems.find((id) => id === item.id);
  let btnstate = !Boolean(state);
  const [addBtn, setAddBtn] = useState(btnstate);
  if(btnstate!=addBtn){
    setAddBtn(btnstate)
  }

  const handleClick = () => {
    if (cartItems.indexOf(item.id) == -1) {
      setCartItems([...cartItems, item.id]);
      setAddBtn(false);
      setCartCount(cartItems?.length + 1);
      setQuantity({ ...quantity, [item.id]: 1 });
    } else {
      let tempList = cartItems.filter((id) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      });
      setCartItems(tempList);
      setAddBtn(true);
      setCartCount(cartItems?.length - 1);
      setQuantity({ ...quantity, [item.id]: 0 });
    }
  };
  return (
    <div className={styles.BookTemplate}>
      <div className={styles.BookTemplate__bookDetails}>
        <div className={styles.BookTemplate__bookDetails__heading}>
          <h4>{item.book}</h4>
          <p className={styles.BookTemplate__bookDetails__para1}>
            Edition: {item.edition}
          </p>
          <p className={styles.BookTemplate__bookDetails__para2}>
            Author: {item.author}
          </p>
        </div>
        <div className={styles.BookTemplate__bookDetails__footer}>
          <p>Price: ₹ {item.price}</p>
        </div>
        {addBtn ? (
          <Button onClick={() => handleClick()}>Add</Button>
        ) : (
          <Button onClick={() => handleClick()}>Delete</Button>
        )}
      </div>
    </div>
  );
};

BookTemplate.propTypes = {};

BookTemplate.defaultProps = {};

export default BookTemplate;

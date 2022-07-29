import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./HomePage.module.scss";
import "antd/dist/antd.min.css";
import { PageHeader, Button, Row, Col, Badge } from "antd";
import logo from "../../asset/logo.png";
import onlineLib from "../../asset/onlineLib.svg";
import { ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";
import BookListPage from "../BookListPage/BookListPage";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../SessionHook";

const HomePage = ({ booklist, quantity, setQuantity }) => {
  const [cartItems, setCartItems] = useSessionStorage("cartitem", []);
  const [cartCount, setCartCount] = useState(cartItems?.length);

  const navigate = useNavigate();
  return (
    <div className={styles.HomePage}>
      <PageHeader
        className={styles.HomePage__navBar}
        backIcon="false"
        title={
          <div className={styles.HomePage__navBar__titleContents}>
            <img src={logo} alt="logo" />
          </div>
        }
        extra={[
          <div className={styles.HomePage__navBar__btnContainer}>
            <Badge count={cartCount}>
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

      <Row className={styles.HomePage__heroContainer}>
        <Col span={24}>
          <Row className={styles.HomePage__heroContainer__flexContainer}>
            <Col span={12}>
              <img src={onlineLib} alt="library img" />
            </Col>
            <Col span={12}>
              <h2>Read, learn, discover.</h2>
              <p>
                Google can bring you back 100,000 answers, a library can bring
                you back the right one.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <BookListPage
        setCartCount={setCartCount}
        booklist={booklist}
        cartItems={cartItems}
        setCartItems={setCartItems}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;

import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginPage.module.scss";
import { Row, Col, Form, Input, Button } from "antd";
import "antd/dist/antd.min.css";
import login from "../../asset/login.svg";
import { useSessionStorage } from "../SessionHook";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useSessionStorage("logindetails", {
    email: "",
    password: "",
  });
  const handleSubmit = (values) => {
    if (values.email?.length > 0 && values.password?.length > 0) {
      setLoginDetails(values);
      navigate("/home");
    }
  };
  return (
    <div className={styles.LoginPage}>
      <Row className={styles.LoginPage__container}>
        <Col span={24}>
          <h1>Login</h1>
          <p>Welcome back.Please login in to your account.</p>
          <Row className={styles.LoginPage__container__flexContainer}>
            <Col span={12}>
              <img
                src={login}
                alt="login-img"
                className={styles.LoginPage__container__flexContainer__img}
              />
            </Col>
            <Col span={12}>
              <Form
                layout="vertical"
                onFinish={handleSubmit}
                className={
                  styles.LoginPage__container__flexContainer__formContainer
                }
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input name="email" type="email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                >
                  <Input.Password name="password" type="password" />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">Get Started</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;

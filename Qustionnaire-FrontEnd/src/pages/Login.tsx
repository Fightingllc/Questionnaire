/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 20:28:59
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-08-05 23:06:02
 */
import { FC, useEffect } from "react";
import { Form, Input, Button, Checkbox, Space, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { REGISTER_PATHNAME } from "../router";


const { Title } = Typography;

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

function remeberUser(username: string, password: string) {
  // debugger
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserInfoFromStorage() {
  // debugger
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
}

const Login: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // debugger
    const { username, password, remember } = values || {};
    console.log("Received values of form: ", values);

    if (remember) {
      remeberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
  };

  useEffect(() => {
    // debugger;
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({username, password});
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            initialValue={{ remeber: true }}
          >
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to={REGISTER_PATHNAME}>注册新用户</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

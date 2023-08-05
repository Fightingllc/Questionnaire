/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 20:29:31
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-08-01 23:23:49
 */
import { FC } from "react";
import { Form, Input, Button, Checkbox, Space, Typography } from 'antd';
import {
  UserAddOutlined
} from "@ant-design/icons";
import styles from "./Register.module.scss"
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";

const {Title} = Typography

const Register: FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title>注册新用户</Title>
        </Space>
      </div>
    <div>
    <Form
        name="register"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className={styles.register_form}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="昵称"
          name="nickname"
          rules={[
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
            wrapperCol={{offset: 6,span: 16}}
          >
          <Space>
            <Button type="primary" htmlType="submit" className={styles.register_form_button}>
              注册
            </Button>
            <Link to={LOGIN_PATHNAME}>已有账户，请登录</Link>
          </Space>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default Register;

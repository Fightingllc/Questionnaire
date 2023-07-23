/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 20:27:17
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-23 23:28:36
 */
import { Button } from "antd";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";



const Home: FC = () => {
  const nav = useNavigate()
  function loginClick() {
    nav('/login')
  }
  return (
    <>
      <h2>Home</h2>
      <Button type="primary" onClick={loginClick}>登录</Button>
      <Link to="/register">注册</Link>
    </>
  );
};

export default Home;

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:51:06
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-25 23:17:09
 */
import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss"
import { Layout } from "antd";
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";


const {Header,Content,Footer} = Layout
const MainLayout: FC = () => {
  return (
    <>
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>凌晨问卷&copy;2023 - present. CreateBy Morning</Footer>
    </Layout>
    </>
  );
};

export default MainLayout;

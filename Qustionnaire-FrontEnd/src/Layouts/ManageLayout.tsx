/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:51:06
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-23 23:14:06
 */
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "antd";
import styles from "./ManageLayout.module.scss"

const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>MainLayout left</p>
        <Button type="primary">创建问卷</Button>
        <br />
        <a href="#">我的问卷</a>
        <br />
        <a href="#">星标问卷</a>
        <br />
        <a href="#">回收站</a>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;

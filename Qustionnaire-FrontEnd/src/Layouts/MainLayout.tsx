/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:51:06
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-23 21:54:06
 */
import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss"

const MainLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>MainLayout header</div>
      <div className={styles.right}>
        <Outlet />
      </div>
      <div>MainLayout footer</div>
    </div>
  );
};

export default MainLayout;

/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:51:06
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-23 23:18:36
 */
import { FC } from "react";
import { Outlet } from "react-router-dom";
// import styles from "./MainLayout.module.scss"

const QuestionLayout: FC = () => {
  return (
    <div >
      <div >MainLayout left</div>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default QuestionLayout;

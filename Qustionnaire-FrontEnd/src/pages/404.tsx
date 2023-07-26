/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:45:51
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-26 22:50:12
 */
import { Button, Result } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MANAGE_INDEX_PATHNAME } from "../router";

const NoFound: FC = () => {
  const nav = useNavigate()
  return (

      <Result
        status="404"
        title="404"
        subTitle="一边去，这个路径啥也没···"
        extra = {
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>返回首页</Button>
        }
      />

  );
};

export default NoFound;

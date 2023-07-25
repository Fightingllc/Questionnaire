/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:51:06
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-24 23:57:22
 */
import { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button, Divider, Space } from "antd";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styles from "./ManageLayout.module.scss";
import { MANAGE_INDEX_PATHNAME } from "../router";

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Space direction="vertical">
            <Button type="primary" icon={<PlusOutlined />}>
              新建问卷
            </Button>
            <Divider />
            <Button
              type={pathname.startsWith(MANAGE_INDEX_PATHNAME) ? "primary" : "text"}
              icon={<BarsOutlined />}
              onClick={() => nav("/manage/list")}
            >
              我的问卷
            </Button>
            <Divider />
            <Button
              type={pathname.startsWith("/manage/star") ? "primary" : "text"}
              icon={<StarOutlined />}
              onClick={() => nav("/manage/star")}
            >
              星标问卷
            </Button>
            <Divider />
            <Button
              type={pathname.startsWith("/manage/trash") ? "primary" : "text"}
              icon={<DeleteOutlined />}
              onClick={() => nav("/manage/trash")}
            >
              回收站
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ManageLayout;

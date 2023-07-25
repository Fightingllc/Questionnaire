/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-25 22:48:53
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-25 23:00:36
 */

import { FC } from "react";
import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { HOME_PATHNAEM } from "../router";

const { Title } = Typography;

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATHNAEM}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>凌晨问卷</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;

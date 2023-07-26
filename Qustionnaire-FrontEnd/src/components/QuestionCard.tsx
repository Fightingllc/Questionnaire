/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 17:22:34
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-26 23:36:22
 */
import { FC } from "react";
import styles from "./QuestionCard.module.scss";
import { Button, Divider, Modal, Popconfirm, Space, Tag, message } from "antd";
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

export type PropsType = {
  _id: string; // 服务端 mongodb ，自动，_id 不重复
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate();
  const {confirm} = Modal
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props;

  function duplicate() {
    // alert('执行复制')
    message.info('执行复制')
  }

  function delClick() {
    confirm({
      title: '是否确认删除',
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.info('删除')
    })
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            {/* 若已经发布则跳转到统计页面，否则编辑页面 */}
            <Link
              to={
                isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`
              }
            >
              <Space>
                {isStar && <StarOutlined style={{ color: "red" }} />}
                {title}
              </Space>
            </Link>
          </div>
          <div className={styles.right}>
            <Space>
              {isPublished ? (
                <Tag color="processing">已发布</Tag>
              ) : (
                <Tag >未发布</Tag>
              )}
              <span>答卷：{answerCount} </span>
              <span>{createdAt}</span>
            </Space>
          </div>
        </div>
        <Divider style={{margin: '12px'}}/>
        <div className={styles["button-container"]}>
          <div className={styles.left}>
            <Space>
              <Button
                type="primary"
                size="small"
                icon={<EditOutlined />}
                onClick={() => nav(`/question/edit/${_id}`)}
                ghost
              >
                编辑问卷
              </Button>
              <Button
                type="primary"
                size="small"
                icon={<LineChartOutlined />}
                disabled={!isPublished}
                onClick={() => nav(`/question/stat/${_id}`)}
                ghost
              >
                数据统计
              </Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Space>
              <Button type="text" size="small" icon={<StarOutlined />}>
                {isStar ? "取消星标" : "标星"}
              </Button>
             <Popconfirm title="确定复制该问卷？" okText="确定" cancelText="取消" onConfirm={duplicate}>
             <Button type="text" size="small" icon={<CopyOutlined />} >
                复制
              </Button>
             </Popconfirm>
              <Button type="text" size="small" icon={<DeleteOutlined />} onClick={delClick}>
                删除
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;

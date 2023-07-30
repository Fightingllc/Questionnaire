/*
 * @Description: 回收站
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 20:28:59
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-30 22:30:06
 */
import { FC, useState } from "react";
import styles from "./common.module.scss";
import {
  Empty,
  Table,
  Typography,
  Tag,
  Checkbox,
  Space,
  Button,
  Modal,
} from "antd";
import { useTitle } from "ahooks";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ListSearch from "../../components/ListSearch";

const { Title } = Typography;
const { confirm } = Modal;

// 问卷数据源
const rowQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: "7月10日 08:45",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: true,
    isStar: false,
    answerCount: 20,
    createdAt: "7月18日 13:45",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: true,
    answerCount: 8,
    createdAt: "7月19日 03:45",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    key: "isPublished",
    render: (isPublished: boolean) => {
      return isPublished ? (
        <Tag color="processing">已发布</Tag>
      ) : (
        <Tag>未发布</Tag>
      );
    },
  },
  {
    title: "是否收藏",
    dataIndex: "isStar",
    key: "isStar",
    render: (isPublished: boolean) => {
      return <Checkbox checked={isPublished} />;
    },
  },
  {
    title: "回答数量",
    dataIndex: "answerCount",
    key: "answerCount",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const Trash: FC = () => {
  useTitle("凌晨问卷 - 星标问卷");

  const [questionList, setQuestionList] = useState(rowQuestionList);
  // 记录选中的Id
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  function deleteClick() {
    confirm({
      title: "确认彻底删除该问卷吗？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后就不可找回啦哈！",
      onOk: () => alert(JSON.stringify(selectedIds)),
    });
  }

  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button
            size="small"
            type="primary"
            disabled={selectedIds.length === 0}
          >
            恢复
          </Button>
          <Button
            size="small"
            danger
            disabled={selectedIds.length === 0}
            onClick={deleteClick}
          >
            彻底删除
          </Button>
        </Space>
      </div>
      {/* rowKey告诉Table使用什么字段来做key */}
      <Table
        dataSource={rowQuestionList}
        columns={columns}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            // console.log(selectedRowKeys);
            setSelectedIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Trash;

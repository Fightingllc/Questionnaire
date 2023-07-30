/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 17:21:15
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-30 21:38:32
 */
import { FC, useState } from "react";
import QuestionCard, { PropsType } from "../../components/QuestionCard";
import styles from "./common.module.scss";
import { Typography } from "antd";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "ahooks";
import ListSearch from "../../components/ListSearch";

const { Title } = Typography;

// 问卷数据源
const rowQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "7月10日 08:45",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: true,
    isStar: true,
    answerCount: 20,
    createdAt: "7月18日 13:45",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: false,
    answerCount: 8,
    createdAt: "7月19日 03:45",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: true,
    isStar: true,
    answerCount: 34,
    createdAt: "7月20日 18:45",
  },
];

const List: FC = () => {
  // 解析URL 场景：搜索
  // const [searchParams] = useSearchParams()
  // console.log("keywords:", searchParams.get('keywords'));

  const [questionList, setQuestionList] = useState(rowQuestionList);

  useTitle("List");

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
        {questionList.length > 0 &&
          questionList.map((q: PropsType) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>
        {/* <div ref={containerRef}>{LoadMoreContentElem}</div> */}
        loadMore。。。
      </div>
    </>
  );
};

export default List;

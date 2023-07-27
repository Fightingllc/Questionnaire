/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 20:28:59
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-27 22:20:17
 */
import { FC, useState } from "react";
import styles from './common.module.scss'
import { Empty, Typography } from 'antd'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import QuestionCard, { PropsType } from "../../components/QuestionCard";

const { Title } = Typography

// 问卷数据源
const rowQuestionList = [
    { _id: 'q1', title: '问卷1', isPublished: false, isStar: true, answerCount: 5, createdAt: '7月10日 08:45' },
    { _id: 'q2', title: '问卷2', isPublished: true, isStar: true, answerCount: 20, createdAt: '7月18日 13:45'  },
    { _id: 'q3', title: '问卷3', isPublished: false, isStar: true, answerCount: 8, createdAt: '7月19日 03:45'  },
    { _id: 'q4', title: '问卷4', isPublished: true , isStar: true, answerCount: 34, createdAt: '7月20日 18:45' },
]

const Star: FC = () => {

  useTitle('凌晨问卷 - 星标问卷')

  const [questionList, setQuestionList] = useState(rowQuestionList)
  return (
    <>
       <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          {/* <ListSearch /> */}
          (搜索)
        </div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map((q: PropsType) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>
        分页
      </div>
    </>
  );
};

export default Star;

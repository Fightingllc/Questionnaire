/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 17:22:34
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-23 23:15:27
 */
import { FC } from "react";
import styles from "./QuestionCard.module.scss";
import { Button } from "antd";

export type PropsType = {
  _id: string; // 服务端 mongodb ，自动，_id 不重复
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <a href="#">{title}</a>
          </div>
          <div className={styles.right}>
            {isPublished ? (
              <span style={{ color: "blue" }}>已发布</span>
            ) : (
              <span>未发布</span>
            )}
            <span>答卷：{answerCount} </span>
            <span>{createdAt}</span>
          </div>
        </div>
        <div className={styles["button-container"]}>
          <div className={styles.left}>
            <Button type="primary" ghost>编辑问卷</Button>
            <Button type="primary" ghost>数据统计</Button>
            <Button type="primary" ghost>编辑问卷</Button>
          </div>
          <div className={styles.right}>
            <Button type="dashed" >标星</Button>
            <Button type="dashed">复制</Button>
            <Button type="dashed">删除</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;

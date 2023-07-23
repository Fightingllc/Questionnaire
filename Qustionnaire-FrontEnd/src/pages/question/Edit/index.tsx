/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-23 21:48:45
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-23 23:31:59
 */
import { FC } from "react";
import { useParams } from "react-router-dom";

const Edit: FC = () => {
  // 解析获取动态路由参数（edit/:id）
  const {id =''} = useParams()
  return (
    <>
      <h2>Edit</h2>
      <p>{id}</p>
    </>
  );
};

export default Edit;

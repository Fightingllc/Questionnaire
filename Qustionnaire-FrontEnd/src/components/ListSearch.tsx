/*
 * @Description: 搜索组件
 * 通过url来显示查询结果
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2023-07-30 21:36:29
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2023-07-30 22:28:34
 */
import { Input } from "antd";
import { FC, useEffect, useState } from "react";
import type {ChangeEvent} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

const { Search } = Input;

const ListSearch: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  // 获取url参数，并设置到input value
  const [ searchParams ] = useSearchParams();

  const [value, setValue] = useState("");

  // 设置为受控组件
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSearch(value: string) {
    // 跳转页面，添加url参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  }

  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setValue(curVal);
  }, [searchParams]);

  return (
    <>
      <Search
        value={value}
        placeholder="输入关键字"
        onSearch={handleSearch}
        onChange={handleChange}
        allowClear
        style={{ width: "200px" }}
      />
    </>
  );
};

export default ListSearch;

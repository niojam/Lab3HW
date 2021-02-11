import React from "react";
import "./SearchBar.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SearchBar = ({ onSearch }) => {
  return (
    <Input
      suffix={
        <Button
          icon={
            <SearchOutlined
              size={5}
              className={"search-input--search-button"}
            />
          }
        />
      }
      size={"large"}
      className={"search-input"}
      placeholder="input search text"
    />
  );
};

export default SearchBar;

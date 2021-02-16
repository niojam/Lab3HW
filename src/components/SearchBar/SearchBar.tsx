import React from "react";
import "./SearchBar.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {
  onSearchClick: () => void;
}

const SearchBar = ({ onSearchClick }: SearchBarProps) => {
  return (
    <Input
      suffix={
        <Button
          icon={
            <SearchOutlined
              onClick={() => onSearchClick()}
              size={5}
              className={"search-input--search-button"}
            />
          }
        />
      }
      size={"large"}
      className={"search-input"}
      placeholder="Search..."
    />
  );
};

export default SearchBar;

import React, { FormEvent, useState } from "react";
import "./SearchBar.scss";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {
  onSearchClick: (keyWord: string) => void;
}

const SearchBar = ({ onSearchClick }: SearchBarProps) => {
  const [input, setInput] = useState<string>("");

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  return (
    <Input
      suffix={
        <Button
          onClick={() => onSearchClick(input)}
          icon={
            <SearchOutlined
              size={5}
              className={"search-input--search-button"}
            />
          }
        />
      }
      onChange={(event) => handleInput(event)}
      size={"large"}
      className={"search-input"}
      placeholder="Search..."
    />
  );
};

export default SearchBar;

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
    const keyWord = e.currentTarget.value;
    if (keyWord.trim()) {
      setInput(keyWord);
    }
  };
  return (
    <Input
      suffix={
        <Button
          icon={
            <SearchOutlined
              onClick={() => onSearchClick(input)}
              size={5}
              className={"search-input--search-button"}
            />
          }
        />
      }
      onChange={handleInput}
      size={"large"}
      className={"search-input"}
      placeholder="Search..."
    />
  );
};

export default SearchBar;

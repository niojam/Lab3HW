import React, { FormEvent } from "react";
import { Input } from "antd";

import "./GeneralInput.scss";

interface GeneralInputProps {
  placeholder?: string;
  onChange: (input: FormEvent<HTMLInputElement>) => void;
  value: string;
}

const GeneralInput = ({ placeholder, onChange, value }: GeneralInputProps) => {
  return (
    <>
      <Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={"edit-quiz--name-input"}
      />
    </>
  );
};

export default GeneralInput;

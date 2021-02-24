import React from "react";
import { Input } from "antd";

import "./GeneralInput.scss";

interface GeneralInputProps {
  placeholder?: string;
}

const GeneralInput = ({ placeholder }: GeneralInputProps) => {
  return (
    <>
      <Input
        defaultValue={"Super quiz"}
        placeholder={placeholder}
        className={"edit-quiz--name-input"}
      />
    </>
  );
};

export default GeneralInput;

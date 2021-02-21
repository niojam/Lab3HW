import React from "react";
import Title from "antd/es/typography/Title";

import "./GeneralHeader.scss";

interface PageHeaderProps {
  placeholder?: string;
}

const GeneralHeader = ({ placeholder }: PageHeaderProps) => {
  return (
    <>
      <Title className={"general-header"}>Introduction</Title>
    </>
  );
};

export default GeneralHeader;

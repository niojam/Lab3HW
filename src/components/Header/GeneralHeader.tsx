import React from "react";
import Title from "antd/es/typography/Title";

import "./GeneralHeader.scss";

interface PageHeaderProps {
  title: string;
}

const GeneralHeader = ({ title }: PageHeaderProps) => {
  return (
    <>
      <Title level={3} className={"general-header"}>
        {title}
      </Title>
      <div className={"general-header-line mb-3"} />
    </>
  );
};

export default GeneralHeader;

import React, { ReactNode } from "react";
import "./HomePageInfoCol.scss";

interface HomePageInfoColProps {
  icon: ReactNode;
  header: string;
  text: string;
}

const HomePageInfoCol = ({ icon, header, text }: HomePageInfoColProps) => {
  return (
    <div className={"m-2 page-info__wrapper"} style={{ textAlign: "center" }}>
      {icon}
      <h2 className={"mt-3 page-info__header"}>{header}</h2>
      <span className={"page-info__text"}>{text}</span>
    </div>
  );
};

export default HomePageInfoCol;

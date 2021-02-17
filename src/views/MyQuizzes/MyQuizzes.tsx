import React, { useState } from "react";
import "antd/dist/antd.css";
import { SearchBar } from "../../components";
import { Affix, Col, Row } from "antd";
import { QuizCardList } from "../../containers";

const MyQuizzes = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div style={{ overflowY: "scroll" }} ref={setContainer}>
      <Row className={"my-5"} justify="space-around">
        <Col className={"mt-5"} span={18}>
          <div className="search-bar-wrapper">
            <Affix offsetTop={-40} target={() => container}>
              <SearchBar
                onSearchClick={() => {
                  console.log("true");
                }}
              />
            </Affix>
          </div>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={18}>
          <QuizCardList />
        </Col>
      </Row>
    </div>
  );
};

export default MyQuizzes;

import React from "react";
import "antd/dist/antd.css";
import { QuizCard, SearchBar } from "../../components";
import { Col, Row } from "antd";

const MyQuizzes = () => {
  return (
    <>
      <Row justify="space-around" className="h-100" align="middle">
        <Col span={24}>
          <Row justify="space-around">
            <Col span={18}>
              <div className="search-bar-wrapper">
                <SearchBar
                  onSearchClick={() => {
                    console.log("true");
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={18}>
              <QuizCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MyQuizzes;

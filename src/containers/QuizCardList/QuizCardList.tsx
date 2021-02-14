import React from "react";
import { Col, Row } from "antd";
import { QuizCard } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QuizCardListProps {}

const QuizCardList = ({}: QuizCardListProps) => {
  return (
    <div style={{ overflowY: "scroll", height: "30%" }}>
      <Row gutter={[16, 12]}>
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>{" "}
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>{" "}
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>{" "}
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>{" "}
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>{" "}
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>{" "}
        <Col style={{ textAlign: "center" }} xs={24} sm={12} lg={8} xxl={6}>
          <div style={{ display: "inline-block" }}>
            <QuizCard
              title={"Tilte"}
              description={"Mingi text"}
              coverImg={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default QuizCardList;

import React, { useState } from "react";
import { Col, Pagination, Row } from "antd";
import { QuizCard } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QuizCardListProps {}

const QuizCardList = ({}: QuizCardListProps) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);
  return (
    <>
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
      </Row>
      <Row className={"my-3"} justify="center">
        <Col>
          <Pagination
            current={page}
            defaultPageSize={9}
            pageSize={pageSize}
            hideOnSinglePage
            onChange={(pageNumber) => {
              setPage(pageNumber);
            }}
            onShowSizeChange={(current, selectedPageSize) => {
              console.log(selectedPageSize);
              setPageSize(selectedPageSize);
            }}
            total={100} // #TODO ADD REAL DATA
          />
        </Col>
      </Row>
    </>
  );
};

export default QuizCardList;

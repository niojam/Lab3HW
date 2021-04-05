import React from "react";
import "./Home.scss";
import { Col, Image, Row } from "antd";
import { TalTechLogoWithBackground } from "../../assets/images";
import { HomePageInfoCol } from "../../components";
import { CaretRightFilled, EditFilled, SignalFilled } from "@ant-design/icons";

const Home = () => {
  return (
    <div className={"main-container"}>
      <Row className={"mb-4"}>
        <Col className={"main-page__img-container"} span={24} />
        <Col span={24}>
          <Row>
            <Col offset={2} span={8}>
              <Image
                className={"main-page__logo"}
                src={TalTechLogoWithBackground}
                preview={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={"space-between"} className={"mt-5"}>
        <Col xs={24} lg={8}>
          <HomePageInfoCol
            header={"Create Quizzes"}
            text={
              "Create fun learning games. Add pictures, select gaming modes and much more"
            }
            icon={<EditFilled />}
          />
        </Col>
        <Col xs={24} lg={8}>
          <HomePageInfoCol
            header={"Play Quizzes"}
            text={
              "Play created quizzes and challenge friends to beat your score"
            }
            icon={<CaretRightFilled />}
          />
        </Col>
        <Col xs={24} lg={8}>
          <HomePageInfoCol
            header={"Watch Reports"}
            text={
              "See what went wrong, what can be improved, what topics are needed to be repeated on Your next class"
            }
            icon={<SignalFilled />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

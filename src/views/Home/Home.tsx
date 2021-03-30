import React from "react";
import "./Home.scss";
import { Col, Image, Row } from "antd";
import { TalTechLogoWithBackground } from "../../assets/images";

const Home = () => {
  return (
    <>
      <Row>
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
    </>
  );
};

export default Home;

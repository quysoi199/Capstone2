import React from "react";
import { Row, Col } from "antd";
import HeadSubBody from "../itemSubBody/headSubBody/HeadSubBody";
import ItemSubBody from "../itemSubBody/ItemSubBody";
import SlideItem from "../../homeBody/slideItem/SlideItem";

function GridSubBody() {
  return (
    <div>
      <Row style={{}}>
        <Row>
          <Col span={24}>
            <HeadSubBody />
          </Col>
        </Row>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
          <Col span={24}>
            <ItemSubBody />
          </Col>
        </Col>
      </Row>
      <SlideItem />
    </div>
  );
}

export default GridSubBody;

import { Row, Col } from "antd";
import React from "react";
import ItemBody from "../itemBody/ItemBody";
import SlideItem from "../slideItem/SlideItem";
import VideoItem from "../videoItem/VideoItem";

function GridItemBody() {
  return (
    <div>
      <Row style={{}}>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemBody />
          </Col>{" "}
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
        </Col>
        <VideoItem />
        <ItemBody />
        <ItemBody />
        <ItemBody />
        <ItemBody />
      </Row>
      <Row>
        <Col span={24}>
          <SlideItem />
        </Col>
      </Row>
    </div>
  );
}

export default GridItemBody;

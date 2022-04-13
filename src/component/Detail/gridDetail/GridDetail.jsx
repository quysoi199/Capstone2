import React from "react";
import { Row, Col } from "antd";
import SlideItem from "../../homeBody/slideItem/SlideItem";
import HeadDetail from "../headDetail/HeadDetail";
import ItemBody from "../../subPage/itemSubBody/ItemSubBody";
import DetailBody from "../detailBody/DetailBody";

function GridDetail() {
  return (
    <div>
      <Row style={{}}>
        <Col span={24}>
          <HeadDetail />
          <DetailBody />
          <ItemBody />
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
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
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={8}>
          <Col span={24}>
            <ItemBody />
          </Col>
          <Col span={24}>
            <ItemBody />
          </Col>
        </Col>
      </Row>
      <SlideItem />
    </div>
  );
}

export default GridDetail;

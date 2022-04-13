import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SliderItemSmall from "../slideItem/SliderItemSmall";
import { Button, BackTop } from "antd";
import { HomeOutlined, UpCircleOutlined } from "@ant-design/icons";
import "./SlideItem.scss";
import PaperItem from "../../paperList/PaperItem";
import ExtraTable from "../../extraTable/ExtraTable";
import { Row, Col } from "antd";

function SlideItem() {
  const styleUP = {
    height: 40,
    width: 40,
    lineHeight: "30px",
    borderRadius: 6,
    backgroundColor: "#7d0",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    zIndex: 1000,
    position: "absolute",
  };
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "10px 4px",
    backgroundColor: "#ffe",
    lineHeight: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="wrapSlideItem">
      <Row>
        <Col style={{ backgroundColor: "#fff" }} span={12}>
          <Col span={24}>
            <PaperItem />
          </Col>
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={12}>
          <Col span={24}>
            <PaperItem />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "#fff" }} span={24}>
          <Col span={24}>
            <ExtraTable />
          </Col>
        </Col>
      </Row>
      <div className="wrapSlide">
        <Slide {...properties}>
          <div className="slideifo" style={style}>
            <SliderItemSmall />
          </div>
          <div className="slideifo" style={style}>
            <SliderItemSmall />
          </div>
          <div className="slideifo" style={style}>
            <SliderItemSmall />
          </div>
          <div className="slideifo" style={style}>
            <SliderItemSmall />
          </div>
          <div className="slideifo" style={style}>
            <SliderItemSmall />
          </div>
          <div className="slideifo" style={style}>
            <SliderItemSmall />
          </div>
        </Slide>
      </div>
      <Button
        onClick={() => {
          window.location.reload();
          window.scrollTo(0, 0);
        }}
        className="iconHome"
        shape="round"
        icon={<HomeOutlined />}
      />
      <BackTop>
        <div className="iconHome2" style={styleUP}>
          <UpCircleOutlined style={{ marginTop: 13 }} />
        </div>
      </BackTop>
    </div>
  );
}

export default SlideItem;

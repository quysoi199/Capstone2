import React from "react";
import "./HeadSubBody.scss";
import { Card } from "antd";
import CardContentFirt from "./CardContent/CardContentFirt/CardContentFirt";
import CardContentSec from "./CardContent/CardContentSec/CardContentSec";
import { allType } from "../../../constants/constans";
import { useParams } from "react-router-dom";
function HeadSubBody() {
  const { type } = useParams();
  console.log(type);
  const result = allType.filter(function (item) {
    return item.type === type;
  });
  console.log(result[0].name);
  return (
    <div className="wrapHeadSubBody">
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <a
            href="/sub-page"
            style={{
              color: "#aca",
              marginRight: "10px",
              paddingRight: "10px",
              borderRight: "1px solid black",
            }}
          >
            TRANG CHỦ
          </a>
          <span
            style={{ color: "#393", fontWeight: "bold", paddingRight: "400px" }}
          >
            {result[0].name.toUpperCase()}
          </span>
        </div>
        <button
          style={{
            backgroundColor: "#3a3",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "5px",
            boxShadow: "none",
            textDecoration: "none",
          }}
        >
          Chia sẻ
        </button>
      </div>
      <div className="wrapTagName">
        <span className="wrapTagNameElem">Game</span>
        <span className="wrapTagNameElem">Phần mềm</span>
        <span className="wrapTagNameElem">Mạng xã hội</span>
        <span className="wrapTagNameElem">Khoa học</span>
        <span className="wrapTagNameElem">Thủ thuật - Tiện ích</span>
        <span className="wrapTagNameElem">Khám phá công nghệ</span>
      </div>
      <hr />
      <div className="wrapCard">
        <Card style={{ width: "100%", display: "flex" }}>
          <Card style={{ width: "70%" }}>
            <p>
              <CardContentFirt />
            </p>
          </Card>
          <Card style={{ width: "30%", height: "100%" }}>
            <p>
              <CardContentSec />
              <CardContentSec />
            </p>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default HeadSubBody;

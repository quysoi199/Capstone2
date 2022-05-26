import React from "react";
import "./HeadSubBody.scss";
import { Card } from "antd";
import CardContentFirt from "./CardContent/CardContentFirt/CardContentFirt";
import CardContentSec from "./CardContent/CardContentSec/CardContentSec";
import { allType } from "../../../constants/constans";
import { Link, useParams } from "react-router-dom";
function HeadSubBody() {
  const { type } = useParams();
  const result = allType.filter(function(item) {
    return item.type === type;
  });
  return (
    <div className="wrapHeadSubBody" style={{ width: "1280px" }}>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              color: "#aca",
              marginRight: "10px",
              paddingRight: "10px",
              borderRight: "1px solid black",
            }}
          >
            TRANG CHỦ
          </Link>
          <span
            style={{ color: "#393", fontWeight: "bold", paddingRight: "400px" }}
          >
            {result[0].name.toUpperCase()}
          </span>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default HeadSubBody;

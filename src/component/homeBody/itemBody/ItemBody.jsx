import img from "../../../img/ItemBody2.jpg";
import { ForwardOutlined } from "@ant-design/icons";
import "./ItemBody.scss";
import React from "react";
import { Link } from "react-router-dom";

function ItemBody({ data }) {
  return (
    <div className="wrapItemBody">
      <img src={data && data.image} alt="image" />
      <div className="wrapItemText">
        {/* <span className="itemText-head">{data.type}</span> */}
      </div>
      <div className="textItem">
        <Link
          to={`/detail/${data.id}`}
          style={{
            color: "#8b4",
            fontSize: "16px",
          }}
        >
          {data.title}
        </Link>
      </div>

      <div className="wrapbodyItem">
        <div className="content" style={{ textAlign: "left" }}>
          {data && data.content}
        </div>
      </div>
      <hr style={{ marginLeft: "5px", marginRight: "5px" }} />
    </div>
  );
}

export default ItemBody;

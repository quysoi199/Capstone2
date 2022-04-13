import React from "react";
import picphu from "../../../../../../img/picphu.jpg";
import "./CardContentSec.scss";

function CardContentSec() {
  return (
    <div className="wrapAll" style={{ position: "relative", margin: 3 }}>
      <img
        style={{ width: "100%", position: "relative" }}
        src={picphu}
        alt=""
      />
      <div className="textPhu">
        <span className="text" style={{}}>
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
      </div>
    </div>
  );
}

export default CardContentSec;

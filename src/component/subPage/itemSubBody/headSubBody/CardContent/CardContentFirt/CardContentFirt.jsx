import React from "react";
import img from "../../../../../../img/imgheadsubpage.jpg";
import "./CardContentFirst.scss";

function CardContentFirt() {
  return (
    <div className="wrapCardFirst">
      <img
        className="CardFirstImg"
        style={{
          width: "100%",
          left: "0",
          cursor: "pointer",
          height: "471px",
        }}
        src={img}
        alt="/"
      />
      <div className="wrapText">
        <span className="wrapCardText1">
          5 lý do vì sao bạn nên ngừng sử dụng Google Drive
        </span>
        <span className="wrapCardText2">
          Google Drive là một trong những dịch vụ lưu trữ đám mây phổ biến nhất
          hiện nay, cung cấp nhiều tính năng và tích hợp liền mạch với hệ sinh
          thái của Google. Tuy nhiên, nền tảng này cũng có một số rủi ro bảo mật
          mà bạn cần lưu ý.
        </span>
      </div>
    </div>
  );
}

export default CardContentFirt;

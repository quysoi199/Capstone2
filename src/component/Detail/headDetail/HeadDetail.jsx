import React from "react";
import "./HeadDetail.scss";

function HeadDetail() {
  return (
    <div className="wrapHeadDetail">
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <a
            href="/"
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
            CÔNG NGHỆ THÔNG TIN
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
      <div className="wrapTagNameDetail">
        <span className="DetailTagName">Game</span>
        <span className="DetailTagName">Phần mềm</span>
        <span className="DetailTagName">Mạng xã hội</span>
        <span className="DetailTagName">Khoa học</span>
        <span className="DetailTagName">Thủ thuật - Tiện ích</span>
        <span className="DetailTagName">Khám phá công nghệ</span>
      </div>
      <hr />
    </div>
  );
}

export default HeadDetail;

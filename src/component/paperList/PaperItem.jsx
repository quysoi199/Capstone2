import React from "react";
import pic from "../../img/picsubitem.jpg";
import { BellOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

import "./PaperItem.scss";

function PaperItem() {
  return (
    <div className="wrapPaperItem">
      <div
        style={{
          marginTop: "10px",
          textAlign: "left",
          width: "100%",
        }}
      >
        <div>
          <a
            href="/sub-page"
            style={{
              width: "100%",
              color: "#8b4",
              fontWeight: "bold",
            }}
          >
            CÔNG NGHỆ THÔNG TIN
          </a>
          <hr size="6" width="99%" align="left" color="#8b4" />
        </div>
      </div>
      <div className="text">
        2 mẹo giúp bạn hạn chế mất tiền khi sử dụng điện thoại
      </div>
      <div className="wrapInf">
        <img className="pic" src={pic} alt="" />
        <div className="text2">
          Để tránh việc con trẻ mua nhầm các ứng dụng có phí trên iPhone hoặc
          Android, bạn có thể áp dụng mẹo nhỏ sau đây để ngăn chặn.
        </div>
      </div>
      <div className="wrapText">
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
        <br />
        <BellOutlined style={{ color: "#8b4" }} />
        <span className="text3">
          Bão Mặt Trời đang liên tiếp trút xuống Trái Đất
        </span>
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default PaperItem;

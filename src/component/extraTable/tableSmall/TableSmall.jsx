import React from "react";
import { CrownOutlined } from "@ant-design/icons";
import "./TableSmall.scss";

function TableSmall() {
  return (
    <div className="wraptable">
      <CrownOutlined style={{ color: "#d58", margin: "6px 8px" }} />
      <span className="tableText">
        Hyun Bin xứng đáng "ông chồng quốc dân", ra tay bảo vệ bà xã Son Ye Jin
        quá tình
      </span>
    </div>
  );
}

export default TableSmall;

import React from "react";
import { GiftOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import { Row, Col } from "antd";
import TableSmall from "./tableSmall/TableSmall";

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
          <GiftOutlined style={{ color: "#d58", margin: "0 3px" }} />
          <a
            href="/sub-page"
            style={{
              width: "100%",
              color: "#d58",
              fontWeight: "bold",
            }}
          >
            DÀNH RIÊNG CHO PHÁI ĐẸP
          </a>
          <hr size="6" width="99%" align="left" color="#d58" />
        </div>
      </div>
      <Row>
        <Col style={{ backgroundColor: "#fff" }} span={12}>
          <Col span={24}>
            <TableSmall />
            <TableSmall />
            <TableSmall />
            <TableSmall />
            <TableSmall />
          </Col>
        </Col>
        <Col style={{ backgroundColor: "#fff" }} span={12}>
          <Col span={24}>
            <TableSmall />
            <TableSmall />
            <TableSmall />
            <TableSmall />
            <TableSmall />
          </Col>
        </Col>
      </Row>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default PaperItem;

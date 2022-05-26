import React from "react";
import { Row, Col } from "antd";
import "./footerpage.scss";
function FooterPage() {
  return (
    <div className="wrapFooter">
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <div className="wrapInfo">
            <div className="wrapInfoTo">
              Tên nhóm
              <div className="infoFooter">C2SE.06</div>
            </div>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}

export default FooterPage;

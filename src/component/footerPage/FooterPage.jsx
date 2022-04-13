import React from "react";
import { Row, Col } from "antd";
import "./footerpage.scss";
function FooterPage() {
  return (
    <div className="wrapFooter">
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <div className="wrapInfo">
            <div className="wrapInfoTo">
              Tin tức
              <div className="infoFooter">Chính trị</div>
              <div className="infoFooter">Xã hội</div>
            </div>
            <div className="wrapInfoTo">
              Bóng đá
              <div className="infoFooter">Ngoại hạng Anh</div>
              <div className="infoFooter">Trong nước</div>
            </div>
            <div className="wrapInfoTo">
              Kinh doanh
              <div className="infoFooter">Khởi nghiệp</div>
              <div className="infoFooter">Tỷ giá</div>
            </div>
            <div className="wrapInfoTo">
              Sức khỏe
              <div className="infoFooter">Bệnh đàn ông</div>
              <div className="infoFooter">Bệnh phụ nữ</div>
            </div>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
}

export default FooterPage;

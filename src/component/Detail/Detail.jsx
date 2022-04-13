import React from "react";
import { Layout, Row, Col } from "antd";
import GridDetail from "../Detail/gridDetail/GridDetail";

const { Content } = Layout;
function Detail() {
  return (
    <div>
      <Layout style={{ backgroundColor: "#fff" }}>
        <Row style={{ flexDirection: "none" }}>
          <Col span={4}></Col>
          <Col span={16}>
            <Content
              style={{
                flexDirection: "none",
                marginTop: "64px",
              }}
            >
              <GridDetail />
            </Content>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Detail;

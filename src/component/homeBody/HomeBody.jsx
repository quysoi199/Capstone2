import React from "react";
import { Layout, Row, Col } from "antd";
import GridItemBody from "./gridItemBody/GridItemBody";
import "./HomeBody.scss";

const { Content } = Layout;
function HomeBody() {
  return (
    <div className="home-body">
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
              <GridItemBody />
            </Content>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Layout>
    </div>
  );
}

export default HomeBody;

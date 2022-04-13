import React from "react";
import HeaderMain from "../header/HeaderMain";
import FooterMain from "../footer/FooterMain";
import { Layout } from "antd";
const { Content } = Layout;

const MainAuthe = ({ children }) => {
  return (
    <Layout>
      <HeaderMain />
      <Content style={{ backgroundColor: "#101114", marginBottom: "4px" }}>
        {children}
      </Content>
      <FooterMain />
    </Layout>
  );
};

export default MainAuthe;

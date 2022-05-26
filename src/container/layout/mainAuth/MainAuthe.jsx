import React, { useEffect } from "react";
import HeaderMain from "../header/HeaderMain";
import FooterMain from "../footer/FooterMain";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
const { Content } = Layout;

const MainAuthe = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);
  return (
    <Layout>
      <HeaderMain />
      <Content style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {children}
      </Content>
      <FooterMain />
    </Layout>
  );
};

export default MainAuthe;

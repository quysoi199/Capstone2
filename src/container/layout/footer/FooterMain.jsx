import React from "react";
import { Layout } from "antd";
import FooterPage from "../../../component/footerPage/FooterPage";

const { Footer } = Layout;
function FooterMain() {
  return (
    <Footer
      style={{
        width: "100%",
        bottom: "0",
        backgroundColor: "#8b4",
        // background: `${
        //   scroll <= 200
        //     ? " linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.6) 96%)"
        //     : "#111319"
        // }`,
      }}
    >
      <FooterPage />
    </Footer>
  );
}

export default FooterMain;

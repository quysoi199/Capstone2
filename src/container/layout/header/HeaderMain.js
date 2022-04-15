import React, { useEffect } from "react";
import { Layout } from "antd";
import Navigation from "../../../component/navigation/Nav";
import { useLocation } from "react-router-dom";

const { Header } = Layout;
function HeaderMain() {
  const synth = window.speechSynthesis;
  const location = useLocation();
  useEffect(() => {
    synth.cancel();
  }, [location.pathname]);
  const [scroll, setScroll] = React.useState(0);
  window.onscroll = () => setScroll(window.scrollY);
  return (
    <Header
      style={{
        width: "100%",
        position: "fixed",
        top: "0",
        zIndex: "999",
        backgroundColor: "#8b4",
        // background: `${
        //   scroll <= 200
        //     ? " linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.6) 96%)"
        //     : "#111319"
        // }`,
      }}
    >
      <Navigation />
    </Header>
  );
}

export default HeaderMain;

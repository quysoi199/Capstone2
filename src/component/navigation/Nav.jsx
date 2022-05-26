import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo1.png";
import "./index.scss";

function Nav() {
  const isUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  let navigation = useNavigate();
  const menuUser = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      <Link to={`/profile/`}>
        <Menu.Item>Profile</Menu.Item>
      </Link>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigation("/", { replace: true });
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <div className="navWrap">
          <Link to="/">
            <img className="logoNav" src={logo} alt="" />
          </Link>

          <Link to="/sub-page/bong-da" style={{ color: "#fff" }}>
            <div className="navTagName">Bóng đá</div>
          </Link>
          <Link to="/sub-page/kinh-doanh" style={{ color: "#fff" }}>
            <div className="navTagName">Kinh doanh</div>
          </Link>
          <Link to="/sub-page/suc-khoe" style={{ color: "#fff" }}>
            <div className="navTagName">Sức khỏe</div>
          </Link>
          <Link to="/sub-page/the-gioi" style={{ color: "#fff" }}>
            <div className="navTagName">Thế giới</div>
          </Link>

          <Link to="/sub-page/cong-nghe" style={{ color: "#fff" }}>
            <div className="navTagName">Công nghệ</div>
          </Link>

          <div className="navTagNames">
            {isUser ? (
              <Dropdown overlay={menuUser} placement="bottomLeft">
                <div>{isUser.email}</div>
              </Dropdown>
            ) : (
              <div className="navMenuuser">
                <div className="navTagName">
                  {" "}
                  <Link style={{ color: "#fff" }} to={`/login/`}>
                    Đăng nhập
                  </Link>
                </div>
                <div className="navTagName">
                  <Link style={{ color: "#fff" }} to={`/register/`}>
                    Đăng ký
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default Nav;

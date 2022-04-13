import React from "react";
import { Row, Col, Menu, Dropdown, Button, Space } from "antd";
import { Link, useParams } from "react-router-dom";
import logo from "../../img/logo1.png";
import "./index.scss";
import { arrTintuc, arrBongda } from "../constants/constans";
function Nav() {
  const menu = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      {arrTintuc.map((item, i) => {
        return (
          <Link key={i} to={`/sub-page/` + item.type}>
            <Menu.Item>
              <div>{item.name}</div>
            </Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
  const menufootball = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      {arrBongda.map((item, i) => {
        return (
          <Link key={i} to={`/sub-page/` + item.type}>
            <Menu.Item>
              <div>{item.name}</div>
            </Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
  const menubusiness = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      <Menu.Item>
        <div>Doanh nhân</div>
      </Menu.Item>
      <Menu.Item>
        <div>Bất động sản</div>
      </Menu.Item>
      <Menu.Item>
        <div>Khởi nghiệp</div>
      </Menu.Item>
      <Menu.Item>
        <div>Doanh nghiệp</div>
      </Menu.Item>
      <Menu.Item>
        <div>Ngân hàng</div>
      </Menu.Item>
      <Menu.Item>
        <div>Giá vàng</div>
      </Menu.Item>
    </Menu>
  );
  const menuhealth = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      <Menu.Item>
        <div>Vacine COVID-19</div>
      </Menu.Item>
      <Menu.Item>
        <div>Số liệu COVID-19</div>
      </Menu.Item>
      <Menu.Item>
        <div>Bệnh đàn ông</div>
      </Menu.Item>
      <Menu.Item>
        <div>Bệnh phụ nữ</div>
      </Menu.Item>
      <Menu.Item>
        <div>Sức khỏe tình dục</div>
      </Menu.Item>
      <Menu.Item>
        <div>Sức khỏe dinh dưỡng</div>
      </Menu.Item>
      <Menu.Item>
        <div>Ung thư</div>
      </Menu.Item>
      <Menu.Item>
        <div>Phát minh y học</div>
      </Menu.Item>
      <Menu.Item>
        <div>Tin tức sức khỏe</div>
      </Menu.Item>
    </Menu>
  );
  const menuworld = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      <Menu.Item>
        <div>Điểm nóng</div>
      </Menu.Item>
      <Menu.Item>
        <div>Quân sự</div>
      </Menu.Item>
      <Menu.Item>
        <div>Thế giới động vật</div>
      </Menu.Item>
      <Menu.Item>
        <div>Môi trường</div>
      </Menu.Item>
      <Menu.Item>
        <div>Thiên nhiên</div>
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
          <Dropdown overlay={menu} placement="">
            <div className="navTagName">Danh mục</div>
          </Dropdown>
          <Dropdown overlay={menufootball} placement="bottomLeft">
            <div className="navTagName">Bóng đá</div>
          </Dropdown>
          <Dropdown overlay={menubusiness} placement="bottomLeft">
            <div className="navTagName">Kinh doanh</div>
          </Dropdown>
          <Dropdown overlay={menuhealth} placement="bottomLeft">
            <div className="navTagName">Sức khỏe</div>
          </Dropdown>
          <Dropdown overlay={menuworld} placement="bottomLeft">
            <div className="navTagName">Thế giới</div>
          </Dropdown>
          <div className="navTagName">Thể thao</div>
          <div className="navTagName">COVID-19</div>
          <div className="navTagName">Chuyển Void</div>
          <div className="navTagName">Đăng nhập</div>
          <div className="navTagName">Đăng ký</div>
        </div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default Nav;
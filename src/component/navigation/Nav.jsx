import React from "react";
import { Row, Col, Menu, Dropdown, Button, Space } from "antd";
import { Link, useParams } from "react-router-dom";
import logo from "../../img/logo1.png";
import "./index.scss";
import {
  arrTintuc,
  arrBongda,
  arrKinhdoanh,
  arrSuckhoe,
  arrThegioi,
} from "../constants/constans";
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
      {arrKinhdoanh.map((item, i) => {
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
  const menuhealth = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      {arrSuckhoe.map((item, i) => {
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
  const menuworld = (
    <Menu
      style={{
        backgroundColor: "#8b4",
      }}
    >
      {arrThegioi.map((item, i) => {
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
          <div className="navTagName">Đăng nhập</div>
          <div className="navTagName">Đăng ký</div>
        </div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default Nav;

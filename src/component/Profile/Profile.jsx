import React from "react";
import { Row, Col, Card, Divider } from "antd";
import "./Profile.scss";
import { Link } from "react-router-dom";

function Profile() {
  const isUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  return (
    <div>
      <Row style={{ paddingTop: 50 }}>
        <Col style={{ backgroundColor: "#9c4" }} span={4}></Col>
        <Col span={16}>
          <Card>
            <h1 className="title">Hồ sơ tài khoản</h1>
            <Divider />
            <Row>
              <Col span={20} sytle={{ margin: "0 auto" }}>
                <Card style={{ marginLeft: "180px" }}>
                  <p>
                    <dl className="dl">
                      <div className="profile">
                        <dt className="dt">First Name</dt>
                        <dd className="dd">{isUser.fistName}</dd>
                      </div>
                      <Divider />
                      <div className="profile">
                        <dt className="dt">Last Name</dt>
                        <dd className="dd">{isUser.lastName}</dd>
                      </div>
                      <Divider />
                      <div className="profile">
                        <dt className="dt">Email</dt>
                        <dd className="dd">{isUser.email}</dd>
                      </div>
                      <Divider />
                      <div className="profile">
                        <dt className="dt">Role</dt>
                        <dd className="dd">{isUser.role}</dd>
                      </div>
                      <Divider />
                      <div
                        style={{
                          border: "1px solid #000",
                          color: "#000",
                          borderRadius: "3px",
                          padding: "10px",
                          backgroundColor: "#28c",
                          width: "100px",
                          marginLeft: "340px",
                        }}
                      >
                        <Link
                          to={`/edit/${isUser.id}`}
                          style={{
                            color: "#000",
                            padding: "10px",
                            backgroundColor: "#28c",
                          }}
                        >
                          Edit
                        </Link>
                      </div>
                    </dl>
                  </p>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col style={{ backgroundColor: "#9c4" }} span={4}></Col>
      </Row>
    </div>
  );
}

export default Profile;

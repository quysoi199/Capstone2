import React, { useState } from "react";
import { Row, Col, Card, Divider } from "antd";
import "./Profile.scss";
import { Link } from "react-router-dom";
import { updateUserID } from "../../fetchData";
function EditProfile() {
  const isUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null;

  const [state, setState] = useState({
    fistName: isUser.fistName,
    lastName: isUser.lastName,
    email: isUser.email,
    role: isUser.role,
  });

  const handleOnchange = (e, type) => {
    if (type) {
      switch (type) {
        case "fistName":
          setState({ ...state, fistName: e.target.value });
          break;
        case "lastName":
          setState({ ...state, lastName: e.target.value });
          break;
        case "email":
          setState({ ...state, email: e.target.value });
          break;
        default:
          return state;
      }
    }
  };
  const handleEdit = async () => {
    const tokens = token.access.token;
    const res = await updateUserID(isUser.id, state, tokens);
    localStorage.setItem("user", JSON.stringify(res));
  };
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
                        <input
                          style={{ width: "300px" }}
                          onChange={(e) => handleOnchange(e, "fistName")}
                          value={state.fistName}
                        />
                      </div>
                      <Divider />
                      <div className="profile">
                        <dt className="dt">Last Name</dt>
                        <input
                          style={{ width: "300px" }}
                          onChange={(e) => handleOnchange(e, "lastName")}
                          value={state.lastName}
                        />
                      </div>
                      <Divider />
                      <div className="profile">
                        <dt className="dt">Email</dt>
                        <input
                          style={{ width: "300px" }}
                          onChange={(e) => handleOnchange(e, "email")}
                          value={state.email}
                        />
                      </div>
                      <Divider />
                      <div className="profile">
                        <dt className="dt">Role</dt>
                        <input
                          style={{ width: "300px" }}
                          value={state.role}
                          disabled
                        />
                      </div>
                      <Divider />
                      <div
                        onClick={handleEdit}
                        style={{
                          border: "1px solid #000",
                          color: "#000",
                          borderRadius: "3px",
                          padding: "5px",
                          backgroundColor: "#28c",
                          cursor: "pointer",
                          width: "100px",
                          marginLeft: "340px",
                        }}
                      >
                        Save
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

export default EditProfile;

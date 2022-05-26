import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./auth.scss";
import { useLocation, useNavigate, Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Không được để trống mục này!")
    .email(),
  password: yup.string().required("Không được để trống mục này!"),
});

function LoginForm(props) {
  let navigation = useNavigate();
  const path = useLocation();
  const isUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  React.useEffect(() => {
    if (isUser) {
      navigation("/", { replace: true });
    }
  }, [isUser]);
  React.useEffect(() => {
    if (isUser) {
      if (path.pathname === "/login") {
        navigation("/", { replace: true });
      }
    }
  }, []);
  const handleSubmit = (value) => {
    const url = "http://localhost:8080/api/auth/login";
    axios
      .post(url, value)
      .then(function(response) {
        console.log(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
        if (response.data.user.role === "user") {
          navigation("/", { replace: true });
        } else if (response.data.user.role === "admin") {
          navigation("/admin", { replace: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(value, err) => {
          handleSubmit(value, err);
        }}
      >
        {(props) => {
          return (
            <div className="split-screen">
              <div className="right">
                <Form>
                  <section className="copy">
                    <h2>Đăng nhập</h2>
                    <div className="login-container">
                      <p>
                        Bạn không có tài khoản?{" "}
                        <Link to="/register">
                          <strong>Đăng ký ngay</strong>
                        </Link>
                      </p>
                    </div>
                  </section>
                  <div className="input-container email">
                    <label htmlFor="InputEmail">Email</label>
                    <Field
                      type="email"
                      id="InputEmail"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Email@rankwork.com"
                      style={
                        props.errors.email && props.touched.email
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                  <div className="input-container password">
                    <label htmlFor="InputPassword">Mật khẩu</label>
                    <Field
                      type={"password"}
                      id="InputPassword"
                      name="password"
                      placeholder="••••••••••••"
                      style={
                        props.errors.password && props.touched.password
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="password" />
                    </small>
                  </div>
                  <div className="forgot">
                    <p>--------------------</p>
                  </div>
                  <button type="submit" className="signup-btn">
                    Đăng nhập
                  </button>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default LoginForm;

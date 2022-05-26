import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Formik, Form, input, ErrorMessage } from "formik";
import "./auth.scss";
import axios from "axios";

// const schema = yup.object().shape({
//   firstname: yup.string().required("This field must be required!"),
//   lastname: yup.string().required("This field must be required!"),
//   email: yup
//     .string()
//     .required("This field must be required!")
//     .email(),
//   password: yup
//     .string()
//     .required("This field must be required!")
//     .min(6),
//   cf_password: yup
//     .string()
//     .required("This field must be required!")
//     .min(6)
//     .oneOf([yup.ref("password")], "Not match with password"),
// });

function RegisterForm(props) {
  const [valueInput, setValueInput] = React.useState({
    fistName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // const test = (e) => {
  //   e.preventDefault();
  //   console.log(valueInput);
  // };
  const handleInput = (e) => {
    const value = e.target.value;
    const nameInput = e.target.name;

    setValueInput({
      ...valueInput,
      [nameInput]: value,
    });
  };
  const isUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const path = useLocation();
  let navigation = useNavigate();
  React.useEffect(() => {
    if (isUser) {
      navigation("/", { replace: true });
    }
  }, [isUser]);
  React.useEffect(() => {
    if (isUser) {
      if (path.pathname === "/register") {
        navigation("/", { replace: true });
      }
    }
  }, []);
  const handleRegister = (e) => {
    e.preventDefault();

    console.log(valueInput);
    const url = "http://localhost:8080/api/auth/register";
    axios
      .post(url, valueInput)
      .then(function(response) {
        console.log(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
        navigation("/", { replace: true });
      })
      .catch(function(error) {
        alert("Wrong !");
        console.log(error);
      });
  };
  return (
    <div className="split-screen">
      <div className="right">
        <form>
          <section className="copy">
            <h2>Đăng ký</h2>
            <div className="login-container">
              <p>
                Bạn đã có tài khoản ?{" "}
                <Link to="/login">
                  <strong>Đăng nhập</strong>
                </Link>
              </p>
            </div>
          </section>

          <div className="input-container fullname">
            <div className="col-6">
              <label htmlFor="fistName">Họ</label>
              <input
                type="text"
                id="fistName"
                name="fistName"
                value={valueInput.fistName}
                onChange={handleInput}
                placeholder="Nguyen"
              />
            </div>
            <div className="col-6">
              <label htmlFor="lastName">Tên</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleInput}
                value={valueInput.lastName}
                placeholder="A"
              />
            </div>
          </div>
          <div className="input-container email">
            <label htmlFor="InputEmail">Email</label>
            <input
              type="email"
              value={valueInput.email}
              onChange={handleInput}
              id="InputEmail"
              name="email"
              placeholder="Email@rankwork.com"
            />
          </div>

          <div className="input-container password">
            <label htmlFor="exampleInputPassword1">Mật khẩu</label>
            <input
              type={"password"}
              id="exampleInputPassword1"
              value={valueInput.password}
              onChange={handleInput}
              name="password"
              placeholder="••••••••••••"
            />
          </div>

          <button type="submit" onClick={handleRegister} className="signup-btn">
            Đăng Ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

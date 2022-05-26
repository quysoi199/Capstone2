import React from "react";
import MainAuth from "../container/layout/mainAuth/MainAuthe";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../container/views/Home";
import SubPage from "../container/views/SubpageHome";
import Detail from "../container/views/DetailHome";
import Login from "../component/auth/LoginForm";
import Register from "../component/auth/RegisterForm";
import Profile from "../component/Profile/Profile";
import EditProfile from "../component/EditProfile/EditProfile";
import AdminPage from "../container/Admin";
import Post from "../component/Pots/Post";

function Router() {
  const path = useLocation();
  return (
    <>
      {path.pathname === "/admin" || path.pathname === "/admin/post" ? (
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/post" element={<Post />} />
        </Routes>
      ) : (
        <MainAuth>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub-page/:type" element={<SubPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit/:id" element={<EditProfile />} />
          </Routes>
        </MainAuth>
      )}
    </>
  );
}

export default Router;

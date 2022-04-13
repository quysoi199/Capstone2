import React from "react";
import MainAuth from "../container/layout/mainAuth/MainAuthe";
import { Routes, Route } from "react-router-dom";
import Home from "../container/views/Home";
import SubPage from "../container/views/SubpageHome";
import Detail from "../container/views/DetailHome";
function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainAuth>
            <Home />
          </MainAuth>
        }
      />
      <Route
        path="/sub-page/:type"
        element={
          <MainAuth>
            <SubPage />
          </MainAuth>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <MainAuth>
            <Detail />
          </MainAuth>
        }
      />
    </Routes>
  );
}

export default Router;

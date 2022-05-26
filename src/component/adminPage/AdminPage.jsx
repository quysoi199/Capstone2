import React from "react";
import TableAdmin from "./tableAdmin/TableAdmin";
import "./index.scss";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <div class="admin">
        <header class="admin__header">
          <a href="" class="logo">
            <h1>Admin</h1>
          </a>
          <div class="toolbar"></div>
        </header>
        <nav class="admin__nav">
          <ul class="menu">
            <li class="menu__item">
              <Link to={"/admin/post"}>Pots</Link>
            </li>
          </ul>
        </nav>
        <main class="admin__main">
          <h2>Dashboard</h2>
          <div class="dashboard">
            <div class="dashboard__item dashboard__item--full">
              <div class="card">
                <TableAdmin />
              </div>
            </div>
          </div>
        </main>
        <footer class="admin__footer">
          <ul class="ticker"></ul>
        </footer>
      </div>
    </div>
  );
}

export default AdminPage;

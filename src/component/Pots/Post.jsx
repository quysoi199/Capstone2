import React from "react";
import { createPost } from "../../fetchData";
function Post() {
  const [state, setState] = React.useState({
    title: "",
    content: "",
    status: true,
    image:
      "http://res.cloudinary.com/smartnew/image/upload/v1653534201/nartxhj1w6f8sefbzwx8.jpg",
    category: "",
    address: "",
    quantity: "123",
  });
  const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null;

  const handleClick = async () => {
    console.log(state);
    await createPost(state, token.access.token);
  };

  const handleOnchange = (e, type) => {
    switch (type) {
      case "title":
        setState({ ...state, title: e.target.value });
        break;
      case "content":
        setState({ ...state, content: e.target.value });
        break;
      case "address":
        setState({ ...state, address: e.target.value });
        break;
      case "address":
        setState({ ...state, address: e.target.value });
        break;
      case "type":
        setState({ ...state, category: e.target.value });
        break;
      default:
        return state;
    }
    console.log(state);
  };
  return (
    <div>
      <div class="admin">
        <header class="admin__header">
          <a href="#" class="logo">
            <h1>Admin</h1>
          </a>
          <div class="toolbar">
            <a href="#" class="logout">
              Log Out
            </a>
          </div>
        </header>
        <nav class="admin__nav">
          <ul class="menu">
            <li class="menu__item">Pots</li>
          </ul>
        </nav>
        <main class="admin__main">
          <h2>Dashboard</h2>
          <div class="dashboard">
            <div class="dashboard__item dashboard__item--full">
              <div class="card">
                <div style={{ width: "900px", marginLeft: "300px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: " space-between",
                    }}
                  >
                    <span
                      style={{
                        paddingRight: "20px",
                      }}
                    >
                      Title
                    </span>
                    <input
                      style={{ padding: "5px" }}
                      value={state.title}
                      onChange={(e) => {
                        handleOnchange(e, "title");
                      }}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: " space-between",
                    }}
                  >
                    <span
                      style={{
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: " space-between",
                      }}
                    >
                      Content
                    </span>
                    <input
                      value={state.content}
                      onChange={(e) => {
                        handleOnchange(e, "content");
                      }}
                    />
                  </div>

                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: " space-between",
                    }}
                  >
                    <span
                      style={{
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: " space-between",
                      }}
                    >
                      Address
                    </span>
                    <input
                      value={state.address}
                      onChange={(e) => {
                        handleOnchange(e, "address");
                      }}
                    />
                  </div>

                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: " space-between",
                    }}
                  >
                    <span
                      style={{
                        paddingRight: "20px",
                        display: "flex",
                        justifyContent: " space-between",
                      }}
                    >
                      Category
                    </span>
                    <input
                      value={state.category}
                      onChange={(e) => {
                        handleOnchange(e, "type");
                      }}
                    />
                  </div>

                  <br />

                  <button onClick={handleClick}>Create</button>
                </div>
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

export default Post;

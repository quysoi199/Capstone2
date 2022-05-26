import React from "react";

function MainAdmin() {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Layout>
          <Sider></Sider>
          <Content></Content>
          <Sider></Sider>
        </Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default MainAdmin;

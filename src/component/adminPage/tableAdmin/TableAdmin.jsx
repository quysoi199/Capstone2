import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Pagination } from "antd";
import { deleteUser, getUsers } from "../../../fetchData";
import axios from "axios";
const { Column, ColumnGroup } = Table;

function TableAdmin() {
  const isUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null;
  // console.log(token.access.token);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(async () => {
    const res = await getUsers(page, token.access.token);
    await setUsers(res);
  }, [page]);
  const onChange = (page, pageSize) => {
    setPage(page);
  };
  const handleDelete = async (data1) => {
    await deleteUser(data1.id, token.access.token);
    const newData = [...users].filter((item) => item.id !== data1.id);
    setUsers(newData);
  };
  const data = [...users];

  return (
    <div>
      <Table dataSource={data} pagination={false}>
        <Column title="First Name" dataIndex="fistName" key="fistName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Role" dataIndex="role" key="role" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              {/* <div>Invite {record.lastName}</div> */}
              <div onClick={() => handleDelete(record)}>Delete</div>
            </Space>
          )}
        />
      </Table>
      <Pagination defaultCurrent={1} total={50} onChange={onChange} />
    </div>
  );
}

export default TableAdmin;

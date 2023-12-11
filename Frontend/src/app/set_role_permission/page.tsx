// "use client";
// import React, { useState, useEffect } from "react";
// import { Table, Checkbox, Select } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import type { CheckboxChangeEvent } from "antd/es/checkbox";
// import axiosInstance from "@/config/axios";

// // interface DataType {
// //   key: React.Key;
// //   name: string;
// // }
// // const role = ["admin", "sub-adm", "dev", "user", "test3", "test4"];
// // const permission = ["Create", "Edit", "test1", "test2", "test3", "test4"];
// function SetRolePermission() {
//   const [listRole, setListRole] = useState([]);
//   const [listPermission, setListPermission] = useState([]);
//   useEffect(() => {
//     Promise.all([
//       axiosInstance.get("/role"),
//       axiosInstance.get("/permission"),
//     ]).then((res) => {
//       const listRoleOption = res[0].data.list.map((x) => {
//         return {
//           value: x.role_id,
//           label: x.role_name,
//         };
//       });
//       setListRole(listRoleOption);
//       setListPermission(res[1].data.list);
//     });
//   }, []);
//   const columns = [
//     {
//       title: "Role Name",
//       width: 100,
//       dataIndex: "name",
//       key: "name",
//       fixed: "left",
//     },
//     {
//       title: "Create",
//       key: "1",
//       render: (text) => (
//         <Checkbox onChange={(e) => onChange(e, "text")}></Checkbox>
//       ),
//     },
//     {
//       title: "Edit",
//       key: "1",
//       render: (text) => (
//         <Checkbox onChange={(e) => onChange(e, "text1")}></Checkbox>
//       ),
//     },
//     {
//       title: "Delete",
//       key: "1",
//       render: (text) => (
//         <Checkbox onChange={(e) => onChange(e, "text2")}></Checkbox>
//       ),
//     },
//     {
//       title: "View",
//       key: "1",
//       render: (text) => (
//         <Checkbox onChange={(e) => onChange(e, "text3")}></Checkbox>
//       ),
//     },
//     {
//       title: "Action",
//       key: "operation",
//       fixed: "right",
//       width: 100,
//       render: () => <a>action</a>,
//     },
//   ];
//   const onChange = (e, text) => {
//     console.log(e);
//   };
//   const data: DataType[] = [
//     {
//       key: "1",
//       name: "John Brown",
//     },
//     {
//       key: "2asdasdsa",
//       name: "Jim Green",
//     },
//   ];
//   const handleChange = (value: string) => {
//     console.log(`selected ${value}`);
//   };
//   return (
//     // <Table
//     //   columns={columns}
//     //   dataSource={data}
//     //   scroll={{ x: 1300 }}
//     //   pagination={false}
//     // />

//     <>
//       <Select
//         style={{ width: 120 }}
//         placeholder="Select Role"
//         onChange={handleChange}
//         options={listRole}
//       />
//     </>
//   );
// }

// export default SetRolePermission;

"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import axiosInstance from "@/config/axios";
import ModalComponent from "./modal";
import createNotification from "@/utils/notify";
import { useUserContext } from "@/context/UserContext";
interface DataType {
  key: string;
  role_name: string;
  permissions: [];
}

const TableComponent: React.FC = () => {
  const [listPermission, setListPermission] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [permissionDetail, setPermissionDetail] = useState({});
  const [listRole, setListRole] = useState([]);
  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 10,
  });
  const { color, setColor } = useUserContext();
  console.log(color);

  useEffect(() => {
    fetchRoleList();
  }, [pagination]);
  useEffect(() => {
    axiosInstance.get("/permission").then((res) => {
      const listPermissionOption = res.data.list.map((x) => {
        return { label: x.permission_name, value: x.permission_id };
      });
      setListPermission(listPermissionOption);
    });
  }, []);
  function fetchRoleList() {
    axiosInstance.get("/role").then((res) => {
      setListRole(res.data.list);
    });
  }
  async function handleSubmitModal(data) {
    console.log(data);

    await axiosInstance
      .post("/set_permission", {
        rolePermissions: [
          { roleId: permissionDetail.role_id, permissionIds: data },
        ],
      })
      .then((res) => {
        createNotification(
          "success",
          `Set permission for Role "${permissionDetail.role_name}" successfully`
        );
        setPermissionDetail({});
        fetchRoleList();
        handleCancelModal();
      });
  }
  function handleCancelModal() {
    setModalOpen(false);
  }
  function handleEditUser(record) {
    setPermissionDetail(record);
    setModalOpen(true);
  }
  function handlePaginate(e) {
    setPagination({
      ...pagination,
      pageNum: e.current,
    });
  }
  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "#",
      key: "#",
      render: (t, r_, index) => <p>{index + 1}</p>,
    },
    {
      title: "Role Name",
      dataIndex: "role_name",
      key: "role_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Permissions",
      key: "permissions",
      dataIndex: "permissions",
      render: (_, { permissions }) => (
        <>
          {permissions.map((p) => {
            return (
              <Tag color={"geekblue"} key={p.permission_id}>
                {p.permission_name.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEditUser(record)}>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={listRole} pagination={false} />
      <ModalComponent
        modalOpen={modalOpen}
        data={{ listPermission, permissionDetail }}
        handleSubmitModal={handleSubmitModal}
        handleCancelModal={handleCancelModal}
      />
      <p>{JSON.stringify(permissionDetail)}</p>
    </>
  );
};

export default TableComponent;

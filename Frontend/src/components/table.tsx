"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import axiosInstance from "@/config/axios";
import ModalComponent from "./modal";
import createNotification from "@/utils/notify";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  permissions: [];
  roles: [];
}

const TableComponent: React.FC = () => {
  const [listUser, setListUser] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [listRole, setListRole] = useState([]);
  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 10,
  });
  useEffect(() => {
    fetchUserList();
  }, [pagination]);
  useEffect(() => {
    axiosInstance.get("/role").then((res) => {
      const listRoleOption = res.data.list.map((x) => {
        return { label: x.role_name, value: x.role_id };
      });
      setListRole(listRoleOption);
    });
  }, []);
  function fetchUserList() {
    axiosInstance
      .get(
        "/list_user?" +
          new URLSearchParams({
            pageNum: pagination.pageNum - 1,
            pageSize: pagination.pageSize,
          })
      )
      .then((res) => {
        const { list, count } = res.data;
        setListUser(list);
        setTotalUser(count);
      });
  }
  async function handleSubmitModal(data) {
    createNotification("success", `Update Successfully`);
    await axiosInstance.put("/update", data);
    setUserDetail({});
    fetchUserList();
    handleCancelModal();
  }
  function handleCancelModal() {
    setModalOpen(false);
  }
  function handleEditUser(record) {
    setUserDetail(record);
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
      render: (t, r_, index) => (
        <p>{(pagination.pageNum - 1) * 10 + index + 1}</p>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "full_name",
      key: "full_name",
      render: (text) => <a>{text}</a>,
    },
    // {
    //   title: "Age",
    //   dataIndex: "age",
    //   key: "age",
    // },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    // },
    {
      title: "Role",
      key: "roles",
      dataIndex: "roles",
      render: (_, { roles }) => (
        <>
          {roles.map((p) => {
            return (
              <Tag color={"geekblue"} key={p.role_id}>
                {p.role_name}
              </Tag>
            );
          })}
        </>
      ),
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
      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{
          current: pagination.pageNum,
          total: totalUser,
        }}
        scroll={{ y: 559 - 120 }}
        footer={() => <p>TOTAL USER : {totalUser}</p>}
        onChange={handlePaginate}
      />
      <ModalComponent
        modalOpen={modalOpen}
        data={{ userDetail, listRole }}
        handleSubmitModal={handleSubmitModal}
        handleCancelModal={handleCancelModal}
      />
    </>
  );
};

export default TableComponent;

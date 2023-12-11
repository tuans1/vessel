import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeleteSVG from "@/public/icon/delete.svg";
import axiosInstance from "@/config/axios";
import { Button, Input, Table } from "antd";
import createNotification from "@/utils/notify";

const tablePermissionColumns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
    render: (text: string, record: any, index: number) => index + 1,
  },
  {
    title: "Permission Name",
    dataIndex: "permission_name",
    key: "permission_name",
  },
  {
    title: "Permission Description",
    dataIndex: "permission_desc",
    key: "permission_desc",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "Action",
    render: () => (
      <Image
        src={DeleteSVG}
        width={25}
        height={25}
        className="cursor-pointer"
        alt="seat"
      />
    ),
  },
];
export default function CreatePermissionComponent() {
  const [listPermission, setListPermission] = useState({ list: [], total: 0 });
  const [permissionName, setPermissionName] = useState("");
  useEffect(() => {
    fetchPermission();
  }, []);
  function fetchPermission() {
    axiosInstance.get("/permission").then((res) => {
      const { list, total } = res.data;
      setListPermission({ list, total });
    });
  }
  function handleCreatePermission() {
    axiosInstance
      .post("/permission", { permission_name: permissionName })
      .then(() => {
        createNotification("success", "Create Permission Successfully");
        fetchPermission();
        setPermissionName("");
      });
  }
  return (
    <div>
      <div className=" flex gap-2 mb-4">
        <div className="w-[300px]">
          <Input
            placeholder="Enter permission name"
            size="middle"
            value={permissionName}
            onChange={(e) => setPermissionName(e.target.value)}
          />
        </div>
        <Button type="primary" onClick={handleCreatePermission}>
          Create
        </Button>
      </div>
      <Table
        dataSource={listPermission.list}
        columns={tablePermissionColumns}
        pagination={false}
        rowKey={({ permission_id }) => permission_id}
        scroll={{ y: 400 }}
      />
    </div>
  );
}

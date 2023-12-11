import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeleteSVG from "@/public/icon/delete.svg";
import axiosInstance from "@/config/axios";
import { Input, Table, Button } from "antd";
import createNotification from "@/utils/notify";

const tableRoleColumns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
    render: (text: string, record: any, index: number) => index + 1,
  },
  {
    title: "Role Name",
    dataIndex: "role_name",
    key: "role_name",
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
export default function CreateRoleComponent() {
  const [listRole, setListRole] = useState({ list: [], total: 0 });
  const [roleName, setRoleName] = useState("");
  const [loadings, setLoadings] = useState<boolean[]>([]);
  useEffect(() => {
    fetchRole();
  }, []);
  function fetchRole() {
    axiosInstance.get("/role").then((res) => {
      const { list, total } = res.data;
      setListRole({ list, total });
    });
  }
  function handleCreateRole() {
    axiosInstance.post("/role", { role_name: roleName }).then(() => {
      createNotification("success", "Create Role Successfully");
      fetchRole();
      setRoleName("");
    });
  }
  return (
    <div>
      <div className=" flex gap-2 mb-4">
        <div className="w-[300px]">
          <Input
            placeholder="Enter role name"
            size="middle"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
        <Button type="primary" onClick={handleCreateRole}>
          Create
        </Button>
      </div>
      <Table
        dataSource={listRole.list}
        columns={tableRoleColumns}
        pagination={false}
        scroll={{ y: 400 }}
        rowKey={({ role_id }) => role_id}
      />
    </div>
  );
}

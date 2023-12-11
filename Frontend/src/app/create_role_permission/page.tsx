"use client";
import React, { useState, useEffect } from "react";
import CreateRoleComponent from "./create_role";
import CreatePermissionComponent from "./create_permission";
import { Tabs, TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Create Role",
    children: <CreateRoleComponent />,
  },
  {
    key: "2",
    label: "Create Permission",
    children: <CreatePermissionComponent />,
  },
];
export default function CreateRolePermission() {
  useEffect(() => {}, []);
  const onChange = (key: string) => {};

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

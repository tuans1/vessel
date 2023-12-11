"use client";
import React, { useEffect, useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Cookies } from "react-cookie";
import { MENU } from "@/constant/menu";
import { useMenuContext } from "@/context/MenuContext";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export default function NavBar() {
  const { listMenu } = useMenuContext();
  const cookies = new Cookies();
  const router = useRouter();
  const pathname = usePathname();
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  function handleLogOut() {
    signOut();
    localStorage.clear();
    cookies.remove("token");
  }
  return (
    <>
      <div className="flex flex-col">
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          mode="vertical"
          items={listMenu}
          className="cus-nav"
          selectedKeys={[pathname]}
        />
        <Button type="primary" onClick={handleLogOut} className="font-bold">
          LOGOUT
        </Button>
      </div>
    </>
  );
}

"use client";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BreadCrumbComponent() {
  const [list, setList] = useState<{ title: string; href?: string }[]>([]);
  const routePathName = usePathname();
  useEffect(() => {
    const splitRoute = routePathName.split("/");
    splitRoute.shift();
    const formattedCrumb = splitRoute.map((path) => {
      return {
        title: path.toUpperCase(),
      };
    });
    setList(formattedCrumb);
  }, [routePathName]);
  return <Breadcrumb items={list} />;
}

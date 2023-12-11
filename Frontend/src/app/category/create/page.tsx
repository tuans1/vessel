"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  console.log(usePathname());
  return <div>Create Category page</div>;
}

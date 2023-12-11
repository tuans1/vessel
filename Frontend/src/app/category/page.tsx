"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
export default function page() {
  const router = useRouter();
  return (
    <div>
      <p>CATEGORY PAGE</p>
      <Button
        type="primary"
        className="my-8"
        onClick={() => router.push("/category/create")}
      >
        Create
      </Button>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useEffect } from "react";
import { Cookies } from "react-cookie";
import NavBar from "./navbar";
import Header from "./header";
export default function AuthComponent({ children }: PropsWithChildren) {
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    if (!cookies.get("token")) {
      // router.replace("/login");
    }
  }, []);
  return (
    <div className="flex">
      <NavBar />
      <div className="w-[calc(100%-256px)]">
        <Header />
        <div className="bg-[#ebe8e8] p-4">
          <div className="p-4 bg-white h-[calc(100vh-121px)]">{children}</div>
        </div>
      </div>
    </div>
  );
}

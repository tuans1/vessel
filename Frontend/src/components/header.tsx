import React, { useEffect, useState } from "react";
import GoogleIcon from "@/public/icon/google.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "antd";
import { useRouter } from "next/navigation";
import BreadCrumbComponent from "./breadcrumb";
export default function Header() {
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();
  // console.log(router.asPath);
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
    // Perform localStorage action
  }, []);
  console.log(userInfo);

  return (
    <div className="p-4 flex justify-between">
      <div className="flex items-center gap-4">
        <Image src={GoogleIcon} width={25} height={25} alt="seat" />
        <BreadCrumbComponent />
      </div>
      <p>{userInfo.full_name}</p>
    </div>
  );
}

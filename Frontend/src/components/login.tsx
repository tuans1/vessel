import React from "react";

export default function LoginComponent({ children }: any) {
  return (
    <div className="h-[calc(100vh-32px)] w-full flex align-middle justify-center background_login py-4">
      <div className=" w-[400px]  px-[70px] py-[70px] bg-[#f1f1f1] rounded-md">
        <div className="w-full h-full text-center flex flex-col justify-between">
          {children}
          <p className="text-center">CLV @Copyright</p>
        </div>
      </div>
    </div>
  );
}

import { Button, Input } from "antd";
import GoogleIcon from "@/public/icon/google.svg";
import FacebookIcon from "@/public/icon/facebook_icon.svg";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <div className="h-screen w-full flex align-middle justify-center bg-red-400 py-4">
        <div className=" w-[600px] h-full px-[70px] py-[70px] bg-[#f1f1f1]">
          <div className="w-full h-full text-center">
            <p className="text-4xl">Login</p>
            <div className="text-gray-600">
              <div className="mt-10">
                <p className="text-left mb-1">Username</p>
                <Input placeholder="Basic usage" />
              </div>
              <div className="mt-4">
                <p className="text-left mb-1">Password</p>
                <Input placeholder="Basic usage" type="password" />
              </div>
              <p className="text-right text-xs mt-1 hover:cursor-pointer">
                Forgot password?
              </p>
            </div>
            <Button type="primary" className="my-8 w-full">
              Login
            </Button>
            <div className="flex flex-col h-[210px] justify-between">
              <div>
                <p className="text-center mb-1">Or Sign In Using</p>
                <div className="flex justify-center gap-4">
                  <div className="login-icon">
                    <Image src={GoogleIcon} width={25} height={25} alt="seat" />
                  </div>
                  <div className="login-icon">
                    <Image
                      src={FacebookIcon}
                      width={25}
                      height={25}
                      alt="seat"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-center">CLV @Copyright</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-screen bg-red-300 py-4">
        <div className="h-full bg-gray-400">BBBB</div>
      </div>
    </>
  );
}

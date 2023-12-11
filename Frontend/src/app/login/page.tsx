"use client";
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import { Button, Input } from "antd";
import GoogleIcon from "@/public/icon/google.svg";
import FacebookIcon from "@/public/icon/facebook_icon.svg";
import Image from "next/image";
import Link from "next/link";
import "@/styles/login.scss";
import LoginComponent from "@/components/login";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import axiosInstance from "@/config/axios";
import { signIn, useSession, getSession } from "next-auth/react";
import { useLoadingContext } from "@/context/LoadingContext";
import createNotification from "@/utils/notify";
export default function Login() {
  const { data, status, update } = useSession();
  const [, setCookie] = useCookies(["token"]);
  const { loading, setLoading } = useLoadingContext();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated" && data.user) {
      console.log("RUN");
      axiosInstance
        .post("/login_google", data.user)
        .then((res) => handleAfterLogin(res.data));
    }
  }, [status]);
  function handleAfterLogin(data: any) {
    if (data.access_token) {
      setCookie("token", data.access_token, {
        maxAge: 3600,
      });
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.user.roles[0].role_name === "admin") {
        router.push("/users");
      } else {
        router.push("/dashboard");
      }
    }
  }
  function handleLogin(e) {
    setLoading(true);
    e.preventDefault();
    axiosInstance
      .post("/login", {
        user_name: usernameRef?.current?.input.value,
        password: passwordRef?.current?.input.value,
      })
      .then(function (res) {
        if (res.data.status === 400) {
          createNotification("warning", res.data.message);
        }
        setLoading(false);
        handleAfterLogin(res.data);
      })
      .catch((error) => alert(error));
  }
  return (
    <>
      <LoginComponent>
        <div>
          <p className="text-4xl">Login</p>
          <form onSubmit={handleLogin}>
            <div className="text-gray-600">
              <div className="mt-10">
                <p className="text-left mb-1">Username</p>
                <Input placeholder="Basic usage" ref={usernameRef} />
              </div>
              <div className="mt-4">
                <p className="text-left mb-1">Password</p>
                <Input
                  placeholder="Basic usage"
                  type="password"
                  ref={passwordRef}
                />
              </div>
              <p className="text-right text-xs mt-1 hover:cursor-pointer">
                Forgot password?
              </p>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="my-8 w-full"
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
          <div className="flex flex-col h-[210px] ">
            <div>
              <p className="text-center mb-1">Or Sign In Using</p>
              <div className="flex justify-center gap-4">
                <div className="login-icon">
                  <Image
                    onClick={() => signIn("google")}
                    src={GoogleIcon}
                    width={25}
                    height={25}
                    alt="seat"
                  />
                </div>
                <div className="login-icon">
                  <Image src={FacebookIcon} width={25} height={25} alt="seat" />
                </div>
              </div>
            </div>
            <p>
              Do not have an account?{" "}
              <Link href="/register" className="text-blue-600">
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
      </LoginComponent>
    </>
  );
}

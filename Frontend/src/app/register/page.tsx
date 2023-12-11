"use client";
import { Button, Input } from "antd";
import Link from "next/link";
import "@/styles/login.scss";
import LoginComponent from "@/components/login";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import createNotification from "@/utils/notify";
import { useLoadingContext } from "@/context/LoadingContext";
export default function Register() {
  const [showVerify, setShowVerify] = useState(false);
  const { _, setLoading } = useLoadingContext();
  const [registerUser, setRegisterUser] = useState({
    username: "",
    fullName: "",
    password: "",
    repeatPassword: "",
  });
  function handleRegister() {
    if (registerUser.password !== registerUser.repeatPassword) {
      createNotification("error", "The password confirm does not match");
      return;
    }
    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API + "/register", {
        user_name: registerUser.username,
        password: registerUser.password,
        full_name: registerUser.fullName,
      })
      .then(function (response) {
        setShowVerify(true);
        setLoading(false);
        // handle success
      })
      .catch((err) => {
        createNotification("error", err.code);
        setLoading(false);
      });
  }
  function handleChangeInput(e, key: string) {
    setRegisterUser({
      ...registerUser,
      [key]: e.target.value,
    });
  }
  return (
    <>
      <LoginComponent>
        <p className="text-4xl">Register</p>
        {showVerify ? (
          <>
            <div>
              Register Successfully. We're sending an email verification to {""}
              <span className="font-bold">{registerUser.username}</span>
            </div>
            <p className="text-center mt-10">
              <Link href="/login" className="text-blue-600">
                Back to Sign In
              </Link>
            </p>
          </>
        ) : (
          <>
            <form onSubmit={handleRegister}>
              <div className="text-gray-600">
                <div className="mt-10">
                  <p className="text-left mb-1">Username</p>
                  <Input
                    placeholder="Basic usage"
                    onChange={(e) => handleChangeInput(e, "username")}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-left mb-1">Full name</p>
                  <Input
                    placeholder="Basic usage"
                    onChange={(e) => handleChangeInput(e, "fullName")}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-left mb-1">Password</p>
                  <Input
                    placeholder="Basic usage"
                    type="password"
                    onChange={(e) => handleChangeInput(e, "password")}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-left mb-1">Repeat Password</p>
                  <Input
                    placeholder="Basic usage"
                    type="password"
                    onChange={(e) => handleChangeInput(e, "repeatPassword")}
                  />
                </div>
              </div>
            </form>
            <Button
              type="primary"
              className="my-8 w-full bg-[#1677ff]"
              onClick={handleRegister}
            >
              Register
            </Button>
            <p className="text-center mb-1">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Sign In Now!
              </Link>
            </p>
          </>
        )}
      </LoginComponent>
    </>
  );
}

"use client";
import "@/styles/login.scss";
import LoginComponent from "@/components/login";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axios";
import { useLoadingContext } from "@/context/LoadingContext";
import createNotification from "@/utils/notify";
import Link from "next/link";
export default function RegisterVerify({ params }: { params: { id: string } }) {
  const [user, setUser] = useState({ fullName: "", username: "" });
  const { loading, setLoading } = useLoadingContext();
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/register_verify/${params.id}`)
      .then(({ data }) => {
        setUser({
          fullName: data.full_name,
          username: data.user_name,
        });
        setLoading(false);
      })
      .catch((err) => {
        createNotification("error", err.code);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <LoginComponent>
        <p className="text-4xl">Verify Register User</p>
        {user?.fullName ? (
          <div>
            <p>Register Successfully for user :</p>
            <p className="font-bold">
              {user.username} - {user.fullName}
            </p>
          </div>
        ) : loading ? (
          ""
        ) : (
          <>
            <p>ERROR</p>
            <p>
              Back to {""}
              <Link href="/login" className="text-blue-600">
                Sign In
              </Link>
            </p>
          </>
        )}
      </LoginComponent>
    </>
  );
}

"use client";
import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Header from "./header";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import NotifyComponent from "./notify";
import "react-notifications/lib/notifications.css";
import ProtectedComponent from "./auth";
import { UserContextProvider } from "@/context/UserContext";
import { LoadingContextProvider } from "@/context/LoadingContext";
import { MenuContextProvider, useMenuContext } from "@/context/MenuContext";
import NotFound from "@/app/not-found";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SessionProvider>
        <UserContextProvider>
          <LoadingContextProvider>
            {usePathname().includes("/login") ||
            usePathname().includes("/register") ? (
              <>{children}</>
            ) : (
              <MenuContextProvider>
                <ProtectedComponent>{children}</ProtectedComponent>
              </MenuContextProvider>
            )}
          </LoadingContextProvider>
        </UserContextProvider>
        <NotifyComponent />
      </SessionProvider>
    </>
  );
};
export default Layout;

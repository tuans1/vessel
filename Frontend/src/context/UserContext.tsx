"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [color, setColor] = useState("red");
  const router = useRouter();
  return (
    <UserContext.Provider value={{ color, setColor }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

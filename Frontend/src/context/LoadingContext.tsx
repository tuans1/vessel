"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { RingSpinnerOverlay } from "react-spinner-overlay";
const LoadingContext = createContext({});

export const LoadingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <RingSpinnerOverlay loading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);

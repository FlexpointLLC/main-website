"use client";

import { useEffect, useState } from "react";
import { store } from "@/redux/store";

import { Provider } from "react-redux";

import { Toaster } from "sonner";

export default function GlobalProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render Redux Provider on client side to avoid SSR issues
  if (!isClient) {
    return (
      <>
        <Toaster position="top-center" richColors />
        {children}
      </>
    );
  }

  return (
    <Provider store={store}>
      <Toaster position="top-center" richColors />
      {children}
    </Provider>
  );
}

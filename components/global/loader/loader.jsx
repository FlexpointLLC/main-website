"use client";
import { useEffect } from "react";
import usePageLoader from "../../../hooks/use-page-loader";

const Loader = () => {
  const setPageLoading = usePageLoader();

  useEffect(() => {
    setPageLoading(true);

    return () => {
      setPageLoading(false);
    };
  }, [setPageLoading]);

  return null;
};

export default Loader;

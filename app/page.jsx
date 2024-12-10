"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/terms");
  }, []);

  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
}

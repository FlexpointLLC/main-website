"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import EmptyStoreImg from "@/public/assets/img/empty-store.svg";

export default function EmptyStore() {
  return (
    <div className="mt-6 flex flex-col items-center space-y-3 rounded-3xl border border-[#cce8ff] bg-[#ebf6fe] p-10">
      <div>
        <Image src={EmptyStoreImg} alt="Error Page Illustration" />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-medium text-[#0E121B]">Empty Store</h3>
        <p className="text-xs text-[#525866]">
          The creator of this store hasn&apos;t added any products yet. They
          might be busy with something else. Try reaching out to them for more
          details.
        </p>
      </div>

      <Button asChild variant="outline" className="w-full">
        <Link href="/">Go Back to Homepage</Link>
      </Button>
    </div>
  );
}

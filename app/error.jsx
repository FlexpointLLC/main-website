"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import ErrorImage from "@/public/assets/img/error-page.svg";

export default function GlobalError({ error, reset }) {
  console.error("🔥🔥🔥", error);
  return (
    <html>
      <body>
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-primary-from-top">
          <div className="flex max-w-sm flex-col items-center justify-center gap-6 px-4">
            <div>
              <Image src={ErrorImage} alt="Error Page Illustration" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="font-medium text-[#0E121B]">
                Oops! The internet tripped.
              </h3>
              <p className="text-xs text-[#525866]">
                Try refreshing the page—If the page still plays dead like a
                dramatic possum, don’t panic—it’s not you, it’s definitely us.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/">Back to Homepage</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  location.reload();
                }}
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

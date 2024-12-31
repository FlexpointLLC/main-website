"use client";

import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import congratulationSvg from "@/public/assets/success/congratulations.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ConfirmationModal({ params }) {
  const storeSlug = params.storeSlug;
  const router = useRouter();
  return (
    <div className="relative h-screen">
      {" "}
      <AlertDialog open={true}>
        <AlertDialogContent className="gap-0 p-0">
          <Image
            src={congratulationSvg}
            alt="congratulation"
            className="w-full"
          />
          <div className="p-5 pt-0">
            <h2 className="mb-2 text-center text-2xl font-medium text-[#0E121B]">
              Congratulations! 🥳
            </h2>
            <p className="mx-auto max-w-96 text-center text-sm text-[#525866]">
              {`You'll receive a confirmation email shortly!`}
            </p>
          </div>
          <hr />
          <div className="mx-4 my-6 space-y-1 rounded-[8px] bg-[#F5F7FA] px-4 py-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-[#0E121B]">
                Book a 1:1 Call with Me
              </h2>
              <h2 className="text-sm font-medium text-[#0E121B]">
                September 3, 2024
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#525866]">Purchased</p>
              <p className="text-xs text-[#525866]">09:15 AM</p>
            </div>
          </div>
          <hr />
          <div className="px-5 py-4">
            <Button
              onClick={() => router.push(`/${storeSlug}`)}
              className="w-full"
              variant={"outline"}
            >
              Return to home
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <footer className="absolute bottom-0 my-6 flex w-full items-center justify-center gap-[7px]">
        <p className="pl-4 text-xs font-medium text-para">Powered by</p>
        <Image src={storeFooterLogo} alt="store footer logo" />
      </footer>
    </div>
  );
}

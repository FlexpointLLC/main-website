"use client";

import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import congratulationSvg from "@/public/assets/success/congratulations.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useSuccessAppointmentQuery } from "@/redux/api/appointmentApi";
import Loader from "@/components/global/loader/loader";
import moment from "moment";

export default function ConfirmationModal({ params }) {
  const router = useRouter();
  const storeSlug = params.storeSlug;
  const order_id = useSearchParams().get("order_id");

  const { data, isLoading } = useSuccessAppointmentQuery(
    { storeSlug, order_id },
    {
      skip: !order_id,
    },
  );

  if (isLoading) {
    return <Loader />;
  }

  const appointment = data?.data;
  const date = new Date(appointment?.date);

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
                {appointment?.title}
              </h2>
              <h2 className="text-sm font-medium text-[#0E121B]">
                {moment(date).format("MMM DD, YYYY")}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#525866]">Purchased</p>
              <p className="text-xs text-[#525866]">{appointment?.time}</p>
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

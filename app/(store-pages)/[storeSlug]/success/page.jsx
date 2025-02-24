"use client";

import storeFooterLogo from "@/public/assets/img/store-footer-logo.svg";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

import congratulationSvg from "@/public/assets/success/congratulations.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useSuccessAppointmentQuery } from "@/redux/api/appointmentApi";
import Loader from "@/components/global/loader/loader";
import Content from "./_component/content";

export default function ConfirmationModal({ params }) {
  const storeSlug = params.storeSlug;
  const order_id = useSearchParams().get("order-id");

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
          <Content appointment={appointment} storeSlug={storeSlug} />
        </AlertDialogContent>
      </AlertDialog>
      {appointment?.branding ? (
        <footer className="absolute bottom-0 my-6 flex w-full items-center justify-center gap-[7px]">
          <p className="pl-4 text-xs font-medium text-para">Powered by</p>
          <Image src={storeFooterLogo} alt="store footer logo" />
        </footer>
      ) : null}
    </div>
  );
}

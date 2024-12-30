import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import congratulationSvg from "@/public/assets/success/congratulations.svg";
import Image from "next/image";

export default function ConfirmationModal() {
  return (
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
        <div className="px-5 py-4">
          <Button
            // onClick={() => setOpenCongratulationModal(false)}
            className="w-full"
            variant={"outline"}
          >
            Close
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

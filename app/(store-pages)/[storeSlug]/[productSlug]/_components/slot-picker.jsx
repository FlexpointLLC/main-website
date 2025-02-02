import Image from "next/image";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SlotPicker = ({
  picked_slot,
  onSlotChange,
  setViewState,

  availableSlots: formattedAvailableSlots,
}) => {
  if (!formattedAvailableSlots) {
    return (
      <div className="max-h-[280px] animate-pulse overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white p-4 scrollbar-none">
        <div className="h-9 w-full rounded bg-gray-200"></div>
        <div className="mt-2 grid grid-cols-3 items-center gap-2">
          <div className="h-8 w-full rounded bg-gray-200"></div>
          <div className="h-8 w-full rounded bg-gray-200"></div>
          <div className="h-8 w-full rounded bg-gray-200"></div>
        </div>
        <div className="mt-2 grid grid-cols-3 items-center gap-2">
          <div className="h-8 w-full rounded bg-gray-200"></div>
          <div className="h-8 w-full rounded bg-gray-200"></div>
          <div className="h-8 w-full rounded bg-gray-200"></div>
        </div>
      </div>
    );
  }

  const slots = formattedAvailableSlots;

  return (
    <div className="max-h-[280px] overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white p-4 scrollbar-none">
      <Tabs
        defaultValue={
          slots.find((slot) => slot.start === picked_slot)?.meridiem || "AM"
        }
      >
        <TabsList className="sticky -top-[15px] w-full">
          <TabsTrigger value="AM" className="w-full">
            AM
          </TabsTrigger>
          <TabsTrigger value="PM" className="w-full">
            PM
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="AM"
          className="mt-2 grid grid-cols-3 items-center gap-2"
        >
          {slots.filter((slot) => slot.meridiem === "AM").length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center gap-2 p-4 pt-6">
              <Image
                src="/assets/icon/calender.svg"
                height={28}
                width={28}
                className="inline-bolck"
                alt=""
              />

              <p className="text-center text-xs font-normal text-para">
                Oops! No time slots are available right now.
              </p>
            </div>
          ) : (
            slots
              .filter((slot) => slot.meridiem === "AM")
              .map((slot, i) => (
                <button
                  className={cn(
                    "h-8 w-full rounded border border-[#F2F5F8] py-2 text-center text-xs hover:bg-gray-100",
                    slot.start === picked_slot
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      : "bg-white text-heading",
                  )}
                  key={i}
                  onClick={() => {
                    onSlotChange("picked_slot", slot.start);
                    onSlotChange("picked_slot_end", slot.end);
                    onSlotChange("picked_meridiem", "AM");
                    setViewState("RESULT");
                    console.log(slot.start);
                  }}
                >
                  {slot.start}
                </button>
              ))
          )}
        </TabsContent>
        <TabsContent
          value="PM"
          className="mt-2 grid grid-cols-3 items-center gap-2"
        >
          {slots.filter((slot) => slot.meridiem === "PM").length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center gap-2 p-4 pt-6">
              <Image
                src="/assets/icon/calender.svg"
                height={28}
                width={28}
                className="inline-bolck"
                alt=""
              />

              <p className="text-center text-xs font-normal text-para">
                Oops! No time slots are available right now.
              </p>
            </div>
          ) : (
            slots
              .filter((slot) => slot.meridiem === "PM")
              .map((slot, i) => (
                <button
                  className={cn(
                    "h-8 w-full rounded border border-[#F2F5F8] py-2 text-center text-xs hover:bg-gray-100",
                    slot.start === picked_slot
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      : "bg-white text-heading",
                  )}
                  key={i}
                  onClick={() => {
                    onSlotChange("picked_slot", slot.start);
                    onSlotChange("picked_slot_end", slot.end);
                    // onSlotChange("picked_slot_end", slot.end);
                    onSlotChange("picked_meridiem", "PM");
                    setViewState("RESULT");
                  }}
                >
                  {slot.start}
                </button>
              ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SlotPicker;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useGetAvailableSlotsQuery } from "@/redux/api/scheduleApi";
import moment from "moment";

const SlotPicker = ({
  picked_slot,
  onSlotChange,
  setDateAndSlotContent,
  selectedDate,
  productSlug,
}) => {
  const { data: availableSlots, isLoading: isSlotsLoading } =
    useGetAvailableSlotsQuery({
      productSlug,
      selectedDate: moment(selectedDate).format("YYYY-MM-DD"),
    });

  if (isSlotsLoading) {
    return (
      <div class="max-h-[280px] animate-pulse overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white p-4 scrollbar-none">
        <div class="h-9 w-full rounded bg-gray-200"></div>
        <div class="mt-2 grid grid-cols-3 items-center gap-2">
          <div class="h-8 w-full rounded bg-gray-200"></div>
          <div class="h-8 w-full rounded bg-gray-200"></div>
          <div class="h-8 w-full rounded bg-gray-200"></div>
        </div>
        <div class="mt-2 grid grid-cols-3 items-center gap-2">
          <div class="h-8 w-full rounded bg-gray-200"></div>
          <div class="h-8 w-full rounded bg-gray-200"></div>
          <div class="h-8 w-full rounded bg-gray-200"></div>
        </div>
      </div>
    );
  }

  const slots = availableSlots.data.slots;

  return (
    <div className="max-h-[280px] overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white p-4 scrollbar-none">
      <Tabs
        defaultValue={
          slots.find((slot) => slot.start === picked_slot)?.meridiem || "AM"
        }
      >
        <TabsList className="sticky -top-2 w-full">
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
          {slots
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
                  onSlotChange("picked_slot_end", slot.end);
                  onSlotChange("picked_meridiem", "AM");
                  setDateAndSlotContent("RESULT");
                }}
              >
                {slot.start}
              </button>
            ))}
        </TabsContent>
        <TabsContent value="PM" className="grid grid-cols-3 items-center gap-2">
          {slots
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
                  onSlotChange("picked_slot_end", slot.end);
                  onSlotChange("picked_meridiem", "PM");
                  setDateAndSlotContent("RESULT");
                }}
              >
                {slot.start}
              </button>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SlotPicker;

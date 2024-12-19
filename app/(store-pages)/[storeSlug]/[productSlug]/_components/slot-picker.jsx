import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const slots = [
  {
    schedule_id: 150,
    start_time: "09:00",
    end_time: "09:30",
    meridiem: "AM",
  },
  {
    schedule_id: 151,
    start_time: "09:30",
    end_time: "10:00",
    meridiem: "AM",
  },
  {
    schedule_id: 152,
    start_time: "01:00",
    end_time: "01:30",
    meridiem: "PM",
  },
];

const SlotPicker = ({ picked_slot, onSlotChange, setDateAndSlotContent }) => {
  return (
    <div className="scrollbar-none max-h-[280px] overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white p-4">
      <Tabs defaultValue="AM">
        <TabsList className="sticky -top-2 w-full">
          <TabsTrigger value="AM" className="w-full">
            AM
          </TabsTrigger>
          <TabsTrigger value="PM" className="w-full">
            PM
          </TabsTrigger>
        </TabsList>
        <TabsContent value="AM" className="grid grid-cols-3 items-center gap-2">
          {slots
            .filter((slot) => slot.meridiem === "AM")
            .map((slot) => (
              <button
                className={cn(
                  "w-full rounded border border-[#F2F5F8] py-2 text-center text-xs",
                  slot.start_time === picked_slot
                    ? "bg-[#0E121B] text-white"
                    : "bg-white text-heading",
                )}
                key={slot.schedule_id}
                onClick={() => {
                  onSlotChange("picked_slot", slot.start_time);
                  setDateAndSlotContent("RESULT");
                }}
              >
                {slot.start_time}
              </button>
            ))}
        </TabsContent>
        <TabsContent value="PM" className="grid grid-cols-3 items-center gap-2">
          {slots
            .filter((slot) => slot.meridiem === "PM")
            .map((slot) => (
              <button
                className={cn(
                  "w-full rounded border border-[#F2F5F8] py-2 text-center text-xs",
                  slot.start_time === picked_slot
                    ? "bg-[#0E121B] text-white"
                    : "bg-white text-heading",
                )}
                key={slot.schedule_id}
                onClick={() => {
                  onSlotChange("picked_slot", slot.start_time);
                  setDateAndSlotContent("RESULT");
                }}
              >
                {slot.start_time}
              </button>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SlotPicker;

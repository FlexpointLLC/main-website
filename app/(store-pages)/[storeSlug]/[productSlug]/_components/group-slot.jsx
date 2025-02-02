import moment from "moment";

import { cn } from "@/lib/utils";

export default function GroupSlot({ events, setViewState, formik }) {
  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.date}>
            <h4 className="text-center text-sm font-semibold text-fl-border">
              {moment(event.date).format("ddd, DD MMM")}
            </h4>

            <div className="mt-2 space-y-2">
              {event.slots.map((slot, index) => {
                const formatTime = (time) => {
                  const match = time.match(/(\d{2}):(\d{2}):\d{2} (\w{2})/);
                  if (!match) return time; // Fallback for invalid time format
                  const [hours, minutes, period] = match.slice(1);
                  return `${hours}:${minutes} ${period}`;
                };

                return (
                  <button
                    type="button"
                    key={index}
                    className={cn(
                      "w-full rounded border border-white bg-white py-2 text-center text-xs hover:bg-gray-100",
                      {
                        "bg-primary text-white hover:bg-primary hover:text-white":
                          formik.values.picked_date === event.date &&
                          formik.values.picked_slot === slot.start_time &&
                          formik.values.picked_meridiem ===
                            slot.start_time.slice(-2),
                      },
                    )}
                    onClick={() => {
                      formik.setFieldValue("picked_date", event.date);
                      formik.setFieldValue("picked_slot", slot.start_time);
                      formik.setFieldValue("picked_slot_end", slot.end_time);
                      formik.setFieldValue(
                        "picked_meridiem",
                        slot.start_time.slice(-2),
                      );
                      setViewState("RESULT");
                    }}
                  >
                    {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                  </button>
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No events available</p>
      )}
    </div>
  );
}

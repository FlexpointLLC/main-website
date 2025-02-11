import moment from "moment";

const SelectedSlotCard = ({
  handleChangeDate,
  selectedDate,
  slotStartTime,
  slotEndTime,
}) => {
  return (
    <div className="max-h-[280px] overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white pt-4">
      <div className="mb-2 flex w-full items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold text-[#1C1C1C]">
          {moment(selectedDate).format("ddd, 	DD MMM")}
        </p>
      </div>
      <div className="mx-4 mb-4 rounded border border-[#F2F5F8] py-2 text-center text-xs text-heading">
        <p>
          {moment(slotStartTime, ["HH:mm"]).format("hh:mm A")} -{" "}
          {moment(slotEndTime, ["HH:mm"]).format("hh:mm A")}
        </p>
      </div>
      <button
        type="button"
        className="w-full border-t border-[#F2F5F8] py-2 text-xs text-heading"
        onClick={handleChangeDate}
      >
        Change Date
      </button>
    </div>
  );
};

export default SelectedSlotCard;

const SelectedSlotCard = ({ handleChangeDate }) => {
  return (
    <div className="max-h-[280px] overflow-y-auto rounded-lg border border-[#F2F5F8] bg-white pt-4">
      <div className="mb-2 flex w-full items-center justify-between px-4">
        <p className="text-sm font-semibold text-[#1C1C1C]">Thu, 22 Aug</p>
        <p className="text-xs text-para">Asia/Dhaka</p>
      </div>
      <div className="mx-4 mb-4 rounded border border-[#F2F5F8] py-2 text-center text-xs text-heading">
        <p>09:00 AM - 10:00 AM</p>
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

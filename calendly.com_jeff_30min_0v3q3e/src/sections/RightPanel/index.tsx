import { DateTimePicker } from "@/sections/RightPanel/components/DateTimePicker";

export const RightPanel = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col h-full break-words mx-auto pt-7">
      <h2 className="text-xl font-bold box-border caret-transparent leading-[30px] break-words text-left w-full mb-5 pl-8 pr-[120px]">
        Select a Date &amp; Time
      </h2>
      <DateTimePicker />
      <div className="absolute bg-white box-border caret-transparent flex max-w-[336px] break-words mt-auto mx-3.5 pb-[11px] bottom-0 inset-x-0"></div>
    </div>
  );
};

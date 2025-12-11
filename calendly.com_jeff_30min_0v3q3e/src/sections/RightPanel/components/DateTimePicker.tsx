import { Calendar } from "@/components/Calendar";

export const DateTimePicker = () => {
  return (
    <div className="box-border caret-transparent flex basis-[300px] grow break-words w-full">
      <div className="box-border caret-transparent max-w-full break-words pb-[55px]">
        <Calendar />
      </div>
    </div>
  );
};

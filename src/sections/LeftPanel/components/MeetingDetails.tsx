import { DetailItem } from "@/sections/LeftPanel/components/DetailItem";

export const MeetingDetails = () => {
  return (
    <div className="box-border caret-transparent break-words mb-5 px-[30px]">
      <div className="text-zinc-900/60 font-bold box-border caret-transparent break-words">
        <DetailItem
          iconUrl="https://c.animaapp.com/mj0uvl59C3Od2E/assets/icon-1.svg"
          text="30 min"
          variant="compact"
        />
        <DetailItem
          iconUrl="https://c.animaapp.com/mj0uvl59C3Od2E/assets/icon-2.svg"
          text="Web conferencing details provided upon confirmation."
          variant=""
        />
      </div>
    </div>
  );
};

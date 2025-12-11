import { LeftPanel } from "@/sections/LeftPanel";
import { RightPanel } from "@/sections/RightPanel";

export const MainContainer = () => {
  return (
    <div className="box-border caret-transparent flex justify-center min-h-[700px] break-words mt-[66px] mb-[30px] px-[5%]">
      <div className="relative bg-white shadow-[rgba(0,0,0,0.08)_0px_1px_8px_0px] box-border caret-transparent flex grow max-w-[800px] min-h-[550px] break-words w-[95%] border border-zinc-900/10 rounded-lg border-solid">
        <LeftPanel />
        <div className="box-border caret-transparent basis-6/12 grow break-words w-6/12">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

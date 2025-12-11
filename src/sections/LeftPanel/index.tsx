import { ProfileSection } from "@/sections/LeftPanel/components/ProfileSection";
import { MeetingDetails } from "@/sections/LeftPanel/components/MeetingDetails";
import { CookieSettings } from "@/sections/LeftPanel/components/CookieSettings";

export const LeftPanel = () => {
  return (
    <div className="relative border-b-sky-950 border-l-sky-950 border-r-zinc-900/10 border-t-sky-950 box-border caret-transparent min-w-[300px] break-words w-6/12 pb-[25px] border-r">
      <div className="box-border caret-transparent gap-x-[30px] flex flex-col h-full break-words gap-y-[30px]">
        <div className="relative content-start items-start box-border caret-transparent basis-0 flex-col grow flex-wrap h-0 justify-start break-words">
          <div className="box-border caret-transparent h-0 break-words overflow-hidden">
            <div className="relative box-border caret-transparent basis-0 shrink-0 float-left h-full max-h-px max-w-px break-words pointer-events-none w-full z-[-1] overflow-hidden"></div>
            <div className="absolute box-border caret-transparent break-words z-0 overflow-hidden inset-0">
              <div className="absolute box-border caret-transparent break-words inset-0">
                <div className="relative box-border caret-transparent max-h-full max-w-full break-words overflow-hidden">
                  <div className="box-border caret-transparent break-words before:accent-auto before:box-border before:caret-transparent before:text-sky-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-proxima_nova after:accent-auto after:box-border after:caret-transparent after:text-sky-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-proxima_nova">
                    <div className="box-border caret-transparent min-h-[550px] break-words pt-[25px]">
                      <a
                        aria-label="Go to previous page"
                        href="https://calendly.com/jeff"
                        className="absolute text-blue-600 text-2xl items-center bg-clip-padding box-border caret-transparent flex h-[43px] justify-center leading-9 break-words text-center w-[43px] border border-zinc-900/10 ml-[30px] mb-6 rounded-[50%] border-solid left-0 top-[25px] hover:bg-blue-600/20"
                      >
                        <span className="relative box-border caret-transparent block leading-6 break-words font-icomoon before:accent-auto before:box-border before:caret-transparent before:text-blue-600 before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon"></span>
                      </a>
                      <ProfileSection />
                      <MeetingDetails />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent h-[550px] max-h-full max-w-full break-words pointer-events-none"></div>
          </div>
        </div>
        <span className="box-border caret-transparent flex justify-between break-words">
          <CookieSettings />
        </span>
      </div>
    </div>
  );
};

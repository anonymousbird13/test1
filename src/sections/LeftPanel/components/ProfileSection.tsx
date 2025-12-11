import { ProfileImage } from "@/sections/LeftPanel/components/ProfileImage";
import { ProfileInfo } from "@/sections/LeftPanel/components/ProfileInfo";

export const ProfileSection = () => {
  return (
    <div className="box-border caret-transparent break-words mb-6">
      <ProfileImage />
      <img
        src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/763/daa1dff9.png"
        alt="Jeff Venn"
        className="caret-transparent h-[65px] break-words w-[65px] ml-[30px] rounded-[50%]"
      />
      <ProfileInfo
        text="Jeff Venn"
        variant="text-zinc-900/60 text-base font-bold box-border caret-transparent leading-6 break-words pl-[30px] pr-2.5"
      />
      <ProfileInfo
        text="Meeting with Jeff 30-Minutes"
        variant="text-[28px] font-bold box-border caret-transparent leading-8 break-words pl-[30px] pr-2.5"
      />
    </div>
  );
};

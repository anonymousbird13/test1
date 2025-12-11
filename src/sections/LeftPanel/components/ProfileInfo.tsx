export type ProfileInfoProps = {
  text: string;
  variant: string;
};

export const ProfileInfo = (props: ProfileInfoProps) => {
  if (
    props.variant ===
    "text-[28px] font-bold box-border caret-transparent leading-8 break-words pl-[30px] pr-2.5"
  ) {
    return <h1 className={props.variant}>{props.text}</h1>;
  }

  return <div className={props.variant}>{props.text}</div>;
};

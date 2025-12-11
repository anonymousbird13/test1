export type DetailItemProps = {
  iconUrl: string;
  text: string;
  variant: string;
};

export const DetailItem = (props: DetailItemProps) => {
  return (
    <div
      className={
        props.variant === "compact"
          ? "items-center box-border caret-transparent flex break-words text-left mb-3"
          : "items-center box-border caret-transparent flex break-words text-left"
      }
    >
      <div
        className={
          props.variant === "compact"
            ? "box-border caret-transparent break-words mr-2 self-start h-5 w-5 mt-px"
            : "box-border caret-transparent break-words mr-2 basis-5 shrink-0"
        }
      >
        {props.variant === "compact" ? (
          <span className="box-border caret-transparent inline-block shrink-0 h-5 break-words align-top w-5">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="box-border caret-transparent"
            />
          </span>
        ) : (
          <div className="self-start box-border caret-transparent h-5 break-words w-5">
            <span className="box-border caret-transparent inline-block shrink-0 h-5 break-words align-top w-5">
              <img
                src={props.iconUrl}
                alt="Icon"
                className="box-border caret-transparent"
              />
            </span>
          </div>
        )}
      </div>
      {props.text}
    </div>
  );
};

// Types
import { DateWrapperProps } from "../../types/Types";
// Styles
import "./DateWrapper.scss";

export const DateWrapper = ({
  dateStart = "",
  dateEnd = "",
  isPresent,
}: DateWrapperProps) => {
  const showDash = dateEnd || isPresent ? "-" : "";
  const showLastDate = (isPresent && "Present") || dateEnd;
  return (
    <span className="year">
      {`${dateStart} ${showDash}
        ${showLastDate}
        `}
    </span>
  );
};

// Types
import { HeadingProps } from "../../types/Types";
// Styles
import "./Heading.scss";

export const Heading = ({ icon, title, alt }: HeadingProps) => {
  const headingClass = alt ? "headingAlt" : "heading";
  return (
    <div className={headingClass}>
      {icon}
      <h4>{title}</h4>
    </div>
  );
};

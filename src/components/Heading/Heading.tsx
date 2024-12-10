// Types
import type { HeadingProps } from "../../types/Types";
// Styles
import "./Heading.scss";

export const Heading = ({ icon, title, alt }: HeadingProps) => {
  const headingClass = alt ? "headingAlt" : "heading";
  return (
    <div className={headingClass}>
      {icon}
      {alt ? <h4>{title}</h4> : <h3>{title}</h3>}
    </div>
  );
};

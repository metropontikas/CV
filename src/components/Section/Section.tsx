// Components
import { Heading } from "../Heading/Heading";
// Types
import type { SectionAltProps } from "../../types/Types";
// Styles
import "./Section.scss";

export const Section = ({
  children,
  icon,
  title,
  alt,
  altHeading,
}: SectionAltProps) => {
  const sectionClass = alt ? "sectionAlt" : "section";

  return (
    <div className={sectionClass}>
      <Heading alt={altHeading} icon={icon} title={title} />
      {children}
    </div>
  );
};

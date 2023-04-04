// Types
import { SectionAltProps } from "../../types/Types";
import HeadingAlt from "../HeadingAlt/HeadingAlt";
// Styles
import "./SectionAlt.scss";

const SectionAlt = ({ children, icon, title }: SectionAltProps) => {
  return (
    <div className="sectionAlt">
      <HeadingAlt icon={icon} title={title} />
      {children}
    </div>
  );
};

export default SectionAlt;

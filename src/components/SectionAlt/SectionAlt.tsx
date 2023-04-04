// Types
import { SectionAltProps } from "../../types/Types";
// Styles
import "./SectionAlt.scss";

const SectionAlt = ({ children, id }: SectionAltProps) => {
  return (
    <div className="sectionAlt" id={id}>
      {children}
    </div>
  );
};

export default SectionAlt;

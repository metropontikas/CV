// Types
import { HeadingAltProps } from "../../types/Types";
// Styles
import "./HeadingAlt.scss";

const HeadingAlt = ({ icon, title }: HeadingAltProps) => {
  return (
    <div className="headingAlt">
      {icon}
      <h4>{title}</h4>
    </div>
  );
};

export default HeadingAlt;

// Types
import { TextWrapperProps } from "../../types/Types";
// Styles
import "./TextWrapper.scss";

const TextWrapper = ({ text }: TextWrapperProps) => {
  return (
    <div className="TextWrapper">
      <p>{text}</p>
    </div>
  );
};

export default TextWrapper;

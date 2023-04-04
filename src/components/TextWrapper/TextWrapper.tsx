// Types
import { TextWrapperProps } from "../../types/Types";
// Styles
import "./TextWrapper.scss";

const TextWrapper = ({ text, children }: TextWrapperProps) => {
  return (
    <div className="TextWrapper">
      <p>{text}</p>
      {children}
    </div>
  );
};

export default TextWrapper;

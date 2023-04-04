import { TextWrapperProps } from "../../types/Types";

import "./TextWrapper.css";

const TextWrapper = ({ text }: TextWrapperProps) => {
  return (
    <div className="TextWrapper">
      <p>{text}</p>
    </div>
  );
};

export default TextWrapper;

// Types
import { MonogramWrapperProps } from "../../../types/Types";
// Styles
import "./MonogramWrapper.scss";

const MonogramWrapper = ({ children }: MonogramWrapperProps) => {
  return <div className="monogram">{children}</div>;
};
export default MonogramWrapper;

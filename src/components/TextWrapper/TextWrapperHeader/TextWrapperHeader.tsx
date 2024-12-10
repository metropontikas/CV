// Types
import type { TextWrapperHeaderProps } from "../../../types/Types";
// Styles
import "./TextWrapperHeader.scss";

export const TextWrapperHeader = ({ title }: TextWrapperHeaderProps) => {
  return <h4>{title}</h4>;
};

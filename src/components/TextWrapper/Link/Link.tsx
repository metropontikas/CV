// Types
import { LinkProps } from "../../../types/Types";
// Styles
import "./Link.scss";

export const Link = ({ href, linkText }: LinkProps) => {
  return (
    <p>
      <a href={href}>{linkText}</a>
    </p>
  );
};

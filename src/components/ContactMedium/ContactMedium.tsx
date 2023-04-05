// Types
import { ContactMediumProps } from "../../types/Types";

export const ContactMedium = ({
  title,
  link,
  type = "",
  placeholder,
}: ContactMediumProps) => {
  return (
    <>
      <h4>{title}</h4>
      <p>
        <a href={`${type}${link}`}>{placeholder || link}</a>
      </p>
    </>
  );
};

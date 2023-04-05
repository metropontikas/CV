// Components
import { TextWrapperHeader } from "./TextWrapperHeader/TextWrapperHeader";
import { DateWrapper } from "../DateWrapper/DateWrapper";
import { TextContent } from "./TextContent/TextContent";
import { RegionWrapper } from "./RegionWrapper/RegionWrapper";
import { Link } from "./Link/Link";
// Types
import { TextWrapperProps } from "../../types/Types";
// Styles
import "./TextWrapper.scss";

export const TextWrapper = ({
  children,
  title,
  dateStart,
  dateEnd,
  isPresent,
  content,
  region,
  href,
  linkText,
  styledContent,
  alt,
}: TextWrapperProps) => {
  return alt ? (
    <div className="TextWrapperAlt">
      <p>{content}</p>
      {children}
    </div>
  ) : (
    <div className="TextWrapper">
      <DateWrapper
        dateStart={dateStart}
        dateEnd={dateEnd}
        isPresent={isPresent}
      />
      <TextWrapperHeader title={title} />
      <TextContent content={content} styledContent={styledContent} />
      <Link href={href} linkText={linkText} />
      <RegionWrapper region={region} />
      {children}
    </div>
  );
};

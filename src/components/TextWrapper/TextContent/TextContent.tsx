// Types
import type { TextContentProps } from "../../../types/Types";
// Style
import "./TextContent.scss";

export const TextContent = ({ content, styledContent }: TextContentProps) => {
  const text = styledContent ? (
    <pre className="styledContent">{styledContent}</pre>
  ) : (
    <p>{content}</p>
  );

  return text;
};

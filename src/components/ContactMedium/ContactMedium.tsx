// Types
import { ContactMediumProps } from "../../types/Types";

export const ContactMedium = ({ title, link = "", type = "", placeholder }: ContactMediumProps) => {
    const isInactiveLink = !type && !link ? "none" : "auto";

    return (
        <>
            <h4>{title}</h4>
            <p>
                <a style={{ pointerEvents: isInactiveLink }} href={`${type}${link}`}>
                    {placeholder || link}
                </a>
            </p>
        </>
    );
};

import { forwardRef } from "react";


type LinearLayoutProps = React.HTMLProps<HTMLDivElement> & {
    spacing?: string;
    direction?: "horizontal" | "vertical";
    className?: string;
    children?: React.ReactNode;
    alignItems?: React.CSSProperties['alignItems'];
    justifyContent?: React.CSSProperties['justifyContent'];
}

export const LinearLayout =  forwardRef<HTMLDivElement, LinearLayoutProps>(
    ({ children, className, direction = "horizontal", spacing = "10px", alignItems, justifyContent, style: givenStyle={}, ...props}, ref) => {
        className = className ? ` ${className}` : "";
        return (
            <div
                ref={ref}
                style={{ gap: spacing, justifyContent, alignItems, ...givenStyle}}
                className={`flex ${direction === "horizontal" ? "flex-row" : "flex-col"} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

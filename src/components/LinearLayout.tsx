import { forwardRef } from "react";


type LinearLayoutProps = React.HTMLProps<HTMLDivElement> & {
    spacing?: string;
    direction?: "horizontal" | "vertical";
    className?: string;
    children?: React.ReactNode;
    alignItems?: "start" | "center" | "end" | "stretch";
    justifyContent?: "start" | "center" | "end" | "between";
}

export const LinearLayout =  forwardRef<HTMLDivElement, LinearLayoutProps>(
    ({ children, className, direction = "horizontal", spacing = "10px", alignItems = "start", justifyContent = "start", style: givenStyle={}, ...props}, ref) => {
        className = className ? ` ${className}` : "";
        return (
            <div
                ref={ref}
                style={{ gap: spacing,  ...givenStyle}}
                className={`flex ${direction === "horizontal" ? "flex-row" : "flex-col"} items-${alignItems} justify-${justifyContent} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

import React from "react";

function joinClasses(...classes: any[]) {
    return classes.filter(v=>typeof v === "string").join(" ");
}

export const Icon = React.forwardRef<HTMLSpanElement, React.ComponentProps<"span"> & { name: IconName|'', size?: string }>((props, ref) => {
    const { name, size = "18px", style, className = "", ...rest } = props;
    
    const resultStyle = {
        verticalAlign:"middle",
        overflow:"hidden",
        width: size,
        height: size,
        fontSize: size,
        ...style
    } satisfies React.CSSProperties;

    return <span
        translate="no"
        ref={ref}
        className={joinClasses("material-symbols-outlined", className)}
        style={resultStyle}
        {...rest}>
        {name}
    </span>
});
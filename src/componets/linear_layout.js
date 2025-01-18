

function VerticalLayout({ spacing = "30px", style, children, ...props }) {
    
    const defaultStyle = {
        display: "flex",
        gap: spacing,
        flexDirection: "column",
    };

    const combinedStyles = {...defaultStyle, ...style}
    
    return (

        <div className="vertical-layout" style={combinedStyles} {...props}>

            {children}

        </div>
    );
    
}


function HorizontalLayout({ spacing = "30px", style, children, ...props}) {
    
    
    const defaultStyle = {
        display: "flex",
        gap: spacing,
        flexDirection: "row",
    };

    const combinedStyles = {...defaultStyle, ...style}
    
    return (

        <div className="horizontal-layout" style={combinedStyles} {...props}>

            {children}

        </div>
    );
    
    
}

export { VerticalLayout, HorizontalLayout };
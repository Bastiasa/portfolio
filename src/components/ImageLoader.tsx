import { useRef } from "react";

type ImageLoaderProps = {
    className?: string;
    src: string;
    alt: string;
    width?: string;
    height?: string;
    style?: React.CSSProperties;
}

export function ImageLoader({ className = "", src, alt, width, height, style:givenStyle = {} }: ImageLoaderProps) {

    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    function onImageLoaded() {
        const imageElement = imageRef.current as HTMLImageElement;
        const containerElement = containerRef.current as HTMLDivElement;

        imageElement.style.opacity = "1";
        imageElement.style.filter = "blur(0)";

        containerElement.style.background = "transparent";
    }

    return (

        <div ref={containerRef} style={{width, height, ...givenStyle}} className={`image-placeholder relative overflow-clip ${className}`}>

            <img
                onLoad={onImageLoaded}
                ref={imageRef}
                src={src}
                alt={alt}
                style={{width, height, opacity: "0", filter: "blur(10px)", transitionProperty:"opacity, filter"}}
                className="absolute inset-0 duration-300 ease-in-out"
            />
            
        </div>
      
  );
    
}

import { useRef } from "react";
import './ImageLoader.css';

type ImageLoaderProps = {
    clip?:boolean
    className?: React.ComponentProps<'div'>['className'];
    src: React.ComponentProps<'img'>['src'];
    alt: React.ComponentProps<'img'>['alt'];
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    style?: React.CSSProperties;
}

export function ImageLoader({clip = true, className = "", src, alt, width, height, style:givenStyle = {} }: ImageLoaderProps) {

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

        <div ref={containerRef} style={{width, height, ...givenStyle}} className={`image-placeholder ${clip ? "overflow-clip" : ""} ${className}`}>

            <img
                onLoad={onImageLoaded}
                ref={imageRef}
                src={src}
                alt={alt}
                style={{opacity: "0", filter: "blur(10px)", transitionProperty:"opacity, filter"}}
                className="image-loader duration-300 ease-in-out"
            />
            
        </div>
      
  );
    
}

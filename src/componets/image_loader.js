'use client';

import { useEffect, useRef, useState } from "react";
import "./styles/image_loader.css";


export default function ImageLoader({ src = "https://placeholder.com/500x500", alt = "", ...props}) {

    const [isLoading, setIsLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    

    function handleOnLoaded() {
        setIsLoading(false);
    }

    function handleOnError() {
        setIsLoading(false);
        setFailed(true);
    }

    const imageReference = useRef(null);

    useEffect(() => {
        imageReference.current.onload = handleOnLoaded;
        imageReference.current.onerror = handleOnError;
        imageReference.current.src = src;
    }, [])

    return (
        <div className={"image-loader " + (isLoading ?"loading" : "")} {...props}>
            <img
                ref={imageReference}
                className="loader-image-element"
                alt={alt}
            />
            
            {isLoading && <div className="loading-spinner"></div>}
            {failed && <span className="load-failed-message">Could not be loaded</span>}
        </div>
    );    
}
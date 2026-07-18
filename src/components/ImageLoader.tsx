import { useState } from "react";

type ImageLoaderProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Imagen con estado de carga simple (skeleton mientras carga, fallback si falla).
 * Si ya tienes un componente ImageLoader en tu proyecto, elimina este archivo
 * y actualiza los imports.
 */
export function ImageLoader({ src, alt, className = "" }: ImageLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`image-loader ${className}`}>
      {!loaded && !errored && <div className="image-loader-skeleton" />}
      <img
        src={errored ? "https://placehold.co/900x900?text=%20" : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className="image-loader-img"
        style={{ opacity: loaded || errored ? 1 : 0 }}
      />
    </div>
  );
}

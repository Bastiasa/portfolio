type IconProps = {
  name: string;
  className?: string;
};

/**
 * Envoltorio ligero sobre Material Symbols (via CDN, ver index.html).
 * Si ya tienes un componente Icon en tu proyecto, elimina este archivo
 * y actualiza los imports.
 */
export function Icon({ name, className = "" }: IconProps) {
  return (
    <span className={`material-symbols-outlined icon ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

import type { CSSProperties, PropsWithChildren } from "react";

type LinearLayoutProps = PropsWithChildren<{
  direction?: "horizontal" | "vertical";
  spacing?: string;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  className?: string;
  style?: CSSProperties;
}>;

/**
 * Contenedor flex reutilizable. Si ya tienes un componente LinearLayout
 * en tu proyecto, elimina este archivo y actualiza los imports.
 */
export function LinearLayout({
  direction = "horizontal",
  spacing = "0",
  alignItems,
  justifyContent,
  className = "",
  style,
  children,
}: LinearLayoutProps) {
  return (
    <div
      className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"} ${className}`}
      style={{
        gap: spacing,
        alignItems,
        justifyContent,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

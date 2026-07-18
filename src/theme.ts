import { createTheme } from "@mantine/core";

/**
 * Nota sobre el color: los componentes de Mantine que usamos (por ahora solo
 * TextInput en el buscador) están re-estilizados a mano en index.css con las
 * clases `.project-search *`, y esas reglas leen las variables CSS de
 * `:root` (--paper, --ink, --accent, etc). Por eso este theme.ts se mantiene
 * mínimo: si quieres cambiar colores, hazlo en un solo lugar → src/index.css.
 */
export const theme = createTheme({
  fontFamily: "Inter, system-ui, sans-serif",
  fontFamilyMonospace: "'IBM Plex Mono', ui-monospace, monospace",
  headings: {
    fontFamily: "'Fraunces', Georgia, serif",
  },
  defaultRadius: "md",
});

import { Icon } from "./Icon";

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type FooterProps = {
  name: string;
  email?: string;
  socials: SocialLink[];
  location?: string;
};

export function Footer({ name, email, socials, location }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-block">
          <p className="footer-eyebrow">Contacto</p>
          <ul className="footer-socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={social.icon} />
                  {social.label}
                </a>
              </li>
            ))}
            {email && (
              <li>
                <a href={`mailto:${email}`}>
                  <Icon name="mail" />
                  {email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="footer-block footer-block-right">
          <p className="footer-eyebrow">Ficha técnica</p>
          <ul className="footer-facts">
            {location && <li>Con base en {location}</li>}
            <li>Construido con Vite, React, Mantine y Tailwind CSS</li>
            <li>Código abierto disponible bajo solicitud</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {year} {name}. Todos los derechos reservados.
        </span>
        <a href="#top">Volver arriba</a>
      </div>
    </footer>
  );
}

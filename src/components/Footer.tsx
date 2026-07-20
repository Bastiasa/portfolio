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
          <p className="footer-eyebrow">Contact</p>
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
          <p className="footer-eyebrow">Tech Stack</p>
          <ul className="footer-facts">
            {location && <li>Based in {location}</li>}
            <li>Built with Astro, React, TypeScript, and Tailwind CSS</li>
            <li>Designed and developed by {name}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {year} {name}. All rights reserved.
        </span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

import { Icon } from "./Icon";

export type HeroProps = {
  name: string;
  role: string;
  tagline: string;
  photoSrc: string;
  location?: string;
  availability?: string;
};

/**
 * Hero cuadrado: la foto se recorta a 1:1 y actúa como "ficha" de identificación,
 * en línea con el resto del sitio (que trata cada proyecto como una entrada de
 * catálogo). El bloque de texto vive junto a ella, no debajo, para que ambos
 * se lean como una sola tarjeta al abrir la página.
 */
export function Hero({
  name,
  role,
  tagline,
  photoSrc,
  location,
  availability,
}: HeroProps) {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-photo-frame">
          <img src={photoSrc} alt={name} className="hero-photo" />
          <span className="hero-photo-tag">Ficha 01</span>
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">Portafolio — {new Date().getFullYear()}</p>
          <h1 className="hero-name">{name}</h1>
          <p className="hero-role">{role}</p>
          <p className="hero-tagline">{tagline}</p>

          <dl className="hero-meta">
            {location && (
              <div className="hero-meta-row">
                <dt>
                  <Icon name="location_on" />
                </dt>
                <dd>{location}</dd>
              </div>
            )}
            {availability && (
              <div className="hero-meta-row">
                <dt>
                  <Icon name="bolt" />
                </dt>
                <dd>{availability}</dd>
              </div>
            )}
          </dl>

          <a className="hero-scroll" href="#proyectos">
            Ver proyectos <Icon name="south" />
          </a>
        </div>
      </div>
    </header>
  );
}

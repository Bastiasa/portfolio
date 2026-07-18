import type { CertificateData } from "../types";

type CertificatesSectionProps = {
  certificates: CertificateData[];
  title?: string;
};

export function CertificatesSection({
  certificates,
  title = "Certificaciones",
}: CertificatesSectionProps) {
  if (certificates.length === 0) return null;

  return (
    <section id="certificaciones" className="certificates-section">
      <h2 className="section-title">{title}</h2>

      <ul className="certificates-list">
        {certificates.map((certificate) => (
          <li key={certificate.url} className="certificate-card">
            <a href={certificate.url} target="_blank" rel="noopener noreferrer">
              <img
                src={certificate.image}
                alt={certificate.title ?? "Certificado"}
                className="certificate-image"
              />
              {(certificate.title || certificate.issuer) && (
                <div className="certificate-caption">
                  {certificate.title && <span className="certificate-title">{certificate.title}</span>}
                  {certificate.issuer && <span className="certificate-issuer">{certificate.issuer}</span>}
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

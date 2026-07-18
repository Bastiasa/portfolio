import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const STORAGE_KEY = "cookie-consent";

type CookieConsentProps = {
  onAccepted: () => void;
};


const DENIED_VALUE = "denied";
const ACCEPTED_VALUE = "accepted";

/**
 * Pestaña de cookies. Se muestra por encima de todo el sitio hasta que el
 * usuario acepta; a partir de ahí queda recordado en localStorage y no
 * vuelve a aparecer en visitas futuras.
 *
 * `onAccepted` es el único punto de entrada: úsalo para inicializar Google
 * Analytics (o cualquier script de medición) solo después del consentimiento,
 * nunca antes.
 */
export function CookieConsent({ onAccepted }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const state = localStorage.getItem(STORAGE_KEY);
    const alreadyAccepted = state === ACCEPTED_VALUE;
    if (alreadyAccepted) {
      onAccepted();
    } else if (state !== DENIED_VALUE) {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, ACCEPTED_VALUE);
    setVisible(false);
    onAccepted();
  }

  function handleDeny() {
    localStorage.setItem(STORAGE_KEY, ACCEPTED_VALUE);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-consent-inner">
        <Icon name="cookie" className="cookie-consent-icon" />

        <p className="cookie-consent-text">
          Este sitio usa cookies de <strong>Google Analytics</strong> para
          entender cómo se navega y mejorar el contenido. No se usan con
          fines publicitarios.
        </p>

        <button type="button" className="cookie-consent-button" onClick={handleDeny}>
          Rechazar
        </button>

        <button type="button" className="cookie-consent-button" onClick={handleAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

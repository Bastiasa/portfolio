import { useState } from "react";

declare global {
    interface Window {
        gtag(...args:any[]):void
    }
}

function initAnalytics() {
    window.gtag('js', new Date());
    window.gtag('config', 'G-JV9ML4JJME');
}

export function GAnalyticsConsent() {

    const [visible, setVisible] = useState(localStorage.getItem('cookiesAccepted') !== 'true');

    function onAcceptClicked() {
        initAnalytics();
        setVisible(false);
        localStorage.setItem('cookiesAccepted', 'true');
    }

    const dialogContent = (
        <div
            className="border-t-[1px] border-t-black fixed bottom-0 w-full px-8 py-6 text-black bg-white! flex flex-row gap-6 items-center">
            
            <h1 className="text-lg">Usamos cookies para mejorar su experiencia de usuario </h1>

            <div className="text-right">
                <button
                    onClick={onAcceptClicked}
                    className="text-white">
                    Aceptar
                </button>
            </div>
        </div>
    );


    return (
        <>
            {visible && dialogContent}
        </>
    );
}
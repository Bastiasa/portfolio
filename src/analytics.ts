
declare global {
    interface Window {
        gtag(...args: any[]): void
    }
};

function initGoogleAnalytics() {
    window.gtag('js', new Date());
    window.gtag('config', 'G-JV9ML4JJME');
}

export const initAnalytics = () => {
    initGoogleAnalytics();
}
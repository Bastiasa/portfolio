
declare global {
    interface Window {
        gtag(...args: any[]): void;
        dataLayer: any[];
    }
};

export function googleAnalyticsSetMode(mode:'restricted'|'normal') {
    switch (mode) {
        case 'restricted':
            window.gtag('consent', 'update', {
                analytics_storage: 'denied'
            });
            break;
        
        case 'normal':
            window.gtag('consent', 'update', {
                analytics_storage: 'granted'
            });
            break;
    
        default:
            break;
    }
}


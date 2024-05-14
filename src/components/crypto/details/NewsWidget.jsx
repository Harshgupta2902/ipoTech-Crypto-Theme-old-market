import { useEffect } from 'react';

export default function NewsWidget({ symbol }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "feedMode": "symbol",
            "symbol": symbol,
            "isTransparent": true,
            "displayMode": "compact",
            "width": "1100",
            "height": "450",
            "colorTheme": "dark",
            "locale": "en"
          });

        document.getElementsByClassName('tradingview-widget-container__widget NewsWidget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget NewsWidget')[0].removeChild(script);
        };
    }, []);

    return (
        <div className="tradingview-widget-container NewsWidget">
            <div className="tradingview-widget-container__widget NewsWidget"></div>
        </div>
    );
}

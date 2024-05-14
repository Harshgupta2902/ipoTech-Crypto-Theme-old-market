import { useEffect } from 'react';

export default function FinancialsWidget({ symbol }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "isTransparent": true,
            "largeChartUrl": "",
            "displayMode": "regular",
            "width": "480",
            "height": "830",
            "colorTheme": "dark",
            "symbol": symbol,
            "locale": "en"
        });

        document.getElementsByClassName('tradingview-widget-container__widget FinancialsWidget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget FinancialsWidget')[0].removeChild(script);
        };
    }, []);

    return (
        <div className="tradingview-widget-container FinancialsWidget">
            <div className="tradingview-widget-container__widget FinancialsWidget"></div>
        </div>
    );
}



import { useEffect } from 'react';

export default function SymbolProfileWidget({ symbol }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
        script.async = true;
        script.innerHTML = JSON.stringify( {
            "width": "480",
            "height": "830",
            "isTransparent": true,
            "colorTheme": "dark",
            "symbol": symbol,
            "locale": "en"
          });

        document.getElementsByClassName('tradingview-widget-container__widget SymbolProfileWidget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget SymbolProfileWidget')[0].removeChild(script);
        };
    }, []);

    return (
        <div className="tradingview-widget-container SymbolProfileWidget">
            <div className="tradingview-widget-container__widget SymbolProfileWidget"></div>
        </div>
    );
}

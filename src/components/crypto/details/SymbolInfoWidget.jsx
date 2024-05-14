import { useEffect } from 'react';

export default function SymbolInfoWidget({ symbol }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
        script.async = true;
        script.innerHTML = JSON.stringify( {
            "symbol": symbol,
              "width": "100%",
                "locale": "en",
                  "colorTheme": "dark",
                    "isTransparent": true
          });

        document.getElementsByClassName('tradingview-widget-container__widget SymbolInfoWidget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget SymbolInfoWidget')[0].removeChild(script);
        };
    }, []);

    return (
        <div className="tradingview-widget-container SymbolInfoWidget">
            <div className="tradingview-widget-container__widget SymbolInfoWidget"></div>
        </div>
    );
}

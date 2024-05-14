import { useEffect } from 'react';

export default function MainChartWidget({ symbol }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": 550,
            "symbol": symbol,
            "interval": "D",
            "timezone": "Asia/Kolkata",
            "theme": "Dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": false,
            "show_popup_button": false,
            "popup_width": "1000",
            "popup_height": "650",
            "container_id": "tradingview_e8053"
        });

        const container = document.getElementById('tradingview_e8053');
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, [symbol]);

    return (
        <div className="tradingview-widget-container">
            <div id="tradingview_e8053"></div>
        </div>
    );
}

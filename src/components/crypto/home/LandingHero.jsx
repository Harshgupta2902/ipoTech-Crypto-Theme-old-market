import React, { useEffect, useRef, useState } from 'react';

export default function LandingHero() {
  const container = useRef();
  const [error, setError] = useState(null);

    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "interval": "1m",
        "width": 425,
        "isTransparent": true,
        "height": 450,
        "symbol": "BINANCE:BTCUSDT",
        "showIntervalTabs": true,
        "displayMode": "single",
        "locale": "en",
        "colorTheme": "light"
      });
  
      if (container.current) {
        container.current.appendChild(script);
    } else {
        setError('Container element not found');
    }

    return () => {
        if (container.current && script.parentNode) {
            container.current.removeChild(script);
        }
    };
    }, []);
  
    return (
      <div className="landing-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Explore Real-time Cryptocurrency Price.</h2>
              <p>Discover the latest trends and prices in the cryptocurrency market. Our platform provides real-time data, advanced charts, and a secure trading experience.</p>
            </div>
            <div className="offset-md-1 col-md-5">
              <div className="tradingview-widget-container tradingview-tecnical-analys">
              <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        {/* Widget will be injected here */}
    </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
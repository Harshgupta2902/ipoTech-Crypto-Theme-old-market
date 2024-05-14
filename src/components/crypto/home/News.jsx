import React, { useEffect, useRef, useState } from 'react';

export default function News() {
    const container = useRef();
    const [error, setError] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify( {
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "compact",
            "width": "100%",
            "height": 430,
            "locale": "en"
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

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div className="landing-feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Check latest news and key events of popular <br /> companies and cryptocurrencies</h2>
                    </div>
                    <div className="col-md-12">
                    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                        {/* Widget will be injected here */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

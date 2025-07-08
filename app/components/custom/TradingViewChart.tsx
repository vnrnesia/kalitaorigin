"use client";

import { useEffect } from "react";

// Eğer TradingView tipi tanımlı değilse aşağıya ekleyebilirsin
declare global {
  interface Window {
    TradingView: {
      widget: new (options: Record<string, unknown>) => unknown;
      [key: string]: unknown;
    };
  }
}

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          width: "100%",
          height: "96%",
          symbol: "OANDA:XAUUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_xauusd",
        });
      }
    };
    document.body.appendChild(script);

    // Opsiyonel: component unmount olunca script'i kaldır
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-6 bg-white rounded-xl overflow-hidden shadow-md h-full">
      <div id="tradingview_xauusd" className="h-[600px] w-full" />
    </div>
  );
};

export default TradingViewChart;

import React, { useState, useEffect } from "react";
import { Webchat } from "@botpress/webchat";

const configuration = {
  clientId: "32ed5e6b-7846-4c56-a4b4-d66d852d066f",
  botName: "Kalita",
  botAvatarUrl: "https://i.pravatar.cc/150?img=12",
  color: "#D6270C",
};

export default function BotpressChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Sadece ekran boyutuna göre isMobile durumunu güncellemek için fonksiyon
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };

    // Sayfa ilk yüklendiğinde isMobile'ı ayarla
    const isMobileViewInitial = window.innerWidth < 768;
    setIsMobile(isMobileViewInitial);

    // Mobil değilse 2 saniye sonra chat'i aç
    if (!isMobileViewInitial) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Resize olayını dinle ve sadece isMobile'ı güncelle
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Chat Açma Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 20,
          right: 12,
          zIndex: 9999,
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#D6270C",
          color: "white",
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(214, 39, 12, 0.4)",
          transition: "all 0.3s ease-in-out",
          animation: "pulse 2s infinite",
        }}
        aria-label="Open Chat"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(214, 39, 12, 0.4))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(214, 39, 12, 0.4)";
        }}
      >
        {/* Chat icon SVG */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.043 38.977V21.083C38.043 20.5307 38.4907 20.083 39.043 20.083C39.5953 20.083 40.043 20.5307 40.043 21.083V38.977C40.043 41.4689 37.1819 42.8743 35.1236 41.2777L31.2722 37.5299L27.8616 34.2893C27.6726 34.1104 27.4243 34.011 27.1694 34.011L8.65497 34.0189L6.99015 33.9989C5.33415 33.981 4.00098 32.6331 4.00098 30.977V8.99899C4.00098 7.34217 5.34323 5.99899 7.00098 5.99899H41.001C42.6573 5.99899 44.001 7.34271 44.001 8.99899V32.999C44.001 33.5513 43.5533 33.999 43.001 33.999C42.4487 33.999 42.001 33.5513 42.001 32.999V8.99899C42.001 8.44728 41.5527 7.99899 41.001 7.99899H7.00098C6.44811 7.99899 6.00098 8.44643 6.00098 8.99899V30.977C6.00098 31.537 6.45194 31.993 7.01298 31.9991L8.66654 32.019L27.169 32.011C27.9369 32.011 28.6769 32.3071 29.2378 32.8381L32.6584 36.0883L36.4319 39.7693C37.0891 40.2764 38.043 39.8079 38.043 38.977ZM30.6559 19.6523C25.5994 24.7088 17.4002 24.7088 12.3437 19.6523C11.9531 19.2618 11.9531 18.6286 12.3437 18.2381C12.7342 17.8476 13.3674 17.8476 13.7579 18.2381C18.0334 22.5136 24.9662 22.5136 29.2417 18.2381C29.6322 17.8476 30.2654 17.8476 30.6559 18.2381C31.0464 18.6286 31.0464 19.2618 30.6559 19.6523Z"
            fill="#FFFF"
          ></path>
        </svg>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? 140 : 80,
            right: isMobile ? "5vw" : 20,
            width: isMobile ? "70vw" : 360,
            height: 560,
            zIndex: 9999,
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          }}
        >
          <Webchat
            clientId={configuration.clientId}
            configuration={{
              botName: configuration.botName,
              botAvatarUrl: configuration.botAvatarUrl,
              color: configuration.color,
              useSessionStorage: true,
              stylesheet: "https://cdn.botpress.cloud/webchat/v0/styles.css",
            }}
          />
        </div>
      )}
    </>
  );
}

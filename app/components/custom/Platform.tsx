"use client";

import React, { ReactNode } from "react";
import TradingViewChart from "./TradingViewChart";

interface CustomSelectProps {
  children: ReactNode;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ children, className }) => (
  <div className="relative w-full">
    <select
      className={`w-full p-3 border rounded-xl appearance-none pr-10 bg-white
                  focus:outline-none focus:ring-2 focus:ring-rose-600
                  transition duration-300 ease-in-out
                  ${className || ""}`}
    >
      {children}
    </select>
    <svg
      className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out group-focus-within:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

const Platform: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <div className="text-start mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Следите за курсом и считайте доход за секунды
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
          Онлайн-график золота и токена в реальном времени. Укажите количество
          токенов и узнайте, сколько вы можете заработать уже сегодня.
        </p>
      </div>

      {/* Chart ve Calculator container */}
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
        <div
          className="w-full md:w-2/3 rounded-3xl"
          style={{ height: "70vh", maxHeight: 550 } as React.CSSProperties}
        >
          <TradingViewChart />
        </div>

        {/* Sağ: Calculator */}
        <div className="w-full md:w-1/3 h-[550px] pt-7 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-md w-full h-full flex flex-col justify-between">
            <h2 className="text-center text-lg font-medium mb-6">Купить сейчас!</h2>

            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <CustomSelect>
                  <option>Купить</option>
                  <option>Продать</option>
                </CustomSelect>
              </div>
              <div className="w-1/2">
                <CustomSelect>
                  <option>Золото</option>
                </CustomSelect>
              </div>
            </div>

            <div className="text-right text-xs text-gray-400 mb-2">1 XAU ≈ $3,340.735USD</div>

            <div className="flex gap-2 mb-4">
              <input
                type="number"
                placeholder="Amount"
                className="w-2/3 p-3 border rounded-xl"
              />
              <div className="w-1/3">
                <CustomSelect>
                  <option>USD</option>
                  <option>EUR</option>
                </CustomSelect>
              </div>
            </div>

            <div className="mb-6">
              <CustomSelect>
                <option>All payment methods</option>
                <option>Bank Transfer</option>
                <option>PayPal</option>
              </CustomSelect>
            </div>

            <button className="w-full bg-[#ad0e21] text-white font-medium py-3 rounded-xl transition hover:bg-rose-700">
              поиск предложений
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

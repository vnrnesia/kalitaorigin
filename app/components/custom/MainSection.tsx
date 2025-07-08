import React from "react";
import { InteractiveHoverButton } from "@/app/components/magicui/interactive-hover-button";

const MainSection: React.FC = () => {
  return (
    <section className="w-full pt-24 md:pt-36 mx-auto my-auto flex items-center justify-center px-8 py-12">
      <div className="text-center font-extrabold max-w-4xl">
        <h1 className="text-3xl md:text-[3.4vw] text-gray-200 leading-tight text-center">
          Инвестируй в{" "}
          <span className="inline-block px-4 py-1 border border-white rounded-full">
            цифровое
          </span>{" "}
          золото Получай доход каждый{" "}
          <span className="inline-block px-4 py-1 border border-white rounded-full">
            месяц
          </span>
        </h1>

        <p className="md:text-lg font-extralight text-gray-300 mt-6">
          Покупай токены, торгуй с другими участниками или <br /> получай
          прибыль по цене золота
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-center w-full">
          <InteractiveHoverButton>Зарегистрироваться</InteractiveHoverButton>
          <InteractiveHoverButton>Как это работает?</InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

import React from "react";
import { InteractiveHoverButton } from "@/app/components/magicui/interactive-hover-button";

const CtaCard = () => {
  return (
    <div className="mx-auto md:h-[400px]  bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545]  md:rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl text-gray-100 font-bold mb-4">
          Начните бесплатно
        </h2>
        <p className="text-lg mb-6 text-gray-100 ">
          Скачайте приложение или установите расширение для браузера на вашем
          ПК, чтобы начать.
        </p>
        <div className="flex gap-4">
          <InteractiveHoverButton>Попробовать сегодня</InteractiveHoverButton>
          <InteractiveHoverButton> Узнать больше</InteractiveHoverButton>

        
        </div>
      </div>
      <div>
        <img
          src="/images/CtaImage.png"
          alt="Call to Action"
          className="object-cover w-50 h-full"
        />
      </div>
    </div>
  );
};

export default CtaCard;

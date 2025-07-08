"use client";
import React, { useState, FormEvent } from "react";
import { TextHoverEffect } from "../magicui/text-hover-effect";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Подписка оформлена для:", email);
    setEmail("");
  };

  return (
    <footer className="bg-neutral-900 text-gray-100 min-h-screen py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextHoverEffect text="Калита" />
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Brand Statement */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Калита</h3>
            <p className="text-gray-400 text-sm">
              Калита — это платформа для покупки и продажи золота. Мы делаем
              торговлю быстрой, простой, безопасной и выгодной для всех участников.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/buy-gold" className="hover:text-white">
                  Покупка золота
                </a>
              </li>
              <li>
                <a href="/sell-gold" className="hover:text-white">
                  Продажа золота
                </a>
              </li>
              <li>
                <a href="/secure-trade" className="hover:text-white">
                  Безопасные сделки
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/about" className="hover:text-white">
                  О платформе
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-white">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="/contacts" className="hover:text-white">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Подписка на новости</h4>
            <form onSubmit={handleSubmit} className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                className="w-full p-2 rounded-md bg-neutral-800 text-gray-100 border border-neutral-700 focus:outline-none focus:border-white"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full bg-[#862828] text-white py-2 rounded-md hover:bg-[#a13333] transition"
              >
                Подписаться
              </button>
            </form>
            <p className="text-gray-400 text-sm">Москва, Россия</p>
            <p className="text-gray-400 text-sm">support@kalita.ru</p>
            <p className="text-gray-400 text-sm">+7 495 123 45 67</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="/terms" className="text-gray-400 text-sm hover:text-white">
              Условия использования
            </a>
            <a href="/cookies" className="text-gray-400 text-sm hover:text-white">
              Политика cookies
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons (can remain unchanged) */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

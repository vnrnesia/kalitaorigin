"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, Draggable);

// Her icon için boyut ve ekstra class tanımlamaları
const icons = [
  { src: "/images/BrandIcon/brand1.png", width: 110, height: 50, pt: "pt-5", pb: "pb-2" },
  { src: "/images/BrandIcon/brand2.png", width: 120, height: 60, pt: "pt-3", pb: "pb-1" },
  { src: "/images/BrandIcon/brand3.png", width: 125, height: 40, pt: "pt-8", pb: "pb-1" },
  { src: "/images/BrandIcon/brand4.png", width: 150, height: 70, pt: "pt-4", pb: "pb-4" },
  { src: "/images/BrandIcon/brand5.png", width: 80, height: 55, pt: "pt-5", pb: "pb-3" },
  { src: "/images/BrandIcon/brand6.png", width: 95, height: 45, pt: "pt-6", pb: "pb-2" },
  { src: "/images/BrandIcon/brand7.png", width: 115, height: 58, pt: "pt-4", pb: "pb-2" },
  { src: "/images/BrandIcon/brand8.png", width: 105, height: 65, pt: "pt-4", pb: "pb-5" },
  { src: "/images/BrandIcon/brand9.png", width: 140, height: 50, pt: "pt-4", pb: "pb-1" },
  { src: "/images/BrandIcon/brand10.png", width: 135, height: 52, pt: "pt-5", pb: "pb-3" },
];

// Loop için iki katına çıkar
const doubledIcons = [...icons, ...icons];

export default function Brands() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const items = Array.from(slider.children) as HTMLElement[];
      const gap = 24;

      const totalWidth = items.reduce(
        (acc, el) => acc + el.offsetWidth + gap,
        0
      );

      slider.style.width = `${totalWidth}px`;

  
      
      const animation = gsap.to(slider, {
        x: -totalWidth / 2,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });

      return () => {
        animation.kill();
      };
      
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden py-6 max-w-full px-4 sm:px-6 lg:px-8 flex justify-center">
      <div
        className="overflow-hidden w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <div
          ref={sliderRef}
          className="flex gap-6 sm:gap-8 md:gap-10"
          style={{ width: "max-content" }}
        >
          {doubledIcons.map((icon, index) => (
            <div
              key={index}
              className={`group flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 ${icon.pt} ${icon.pb}`}
              style={{
                width: `${icon.width}px`,
                height: `${icon.height}px`,
              }}
            >
              <Image
                src={icon.src}
                alt={`Company logo ${index + 1}`}
                className="object-contain"
                width={icon.width}
                height={icon.height}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

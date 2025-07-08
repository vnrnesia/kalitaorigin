"use client";
import { LogIn } from "lucide-react";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./Navbar";

type SiteHeaderProps = {
  className?: string;
};

export const SiteHeader = ({ className }: SiteHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Главная", link: "#" },
    { name: "О нас", link: "#" },
    { name: "Партнеры", link: "#" },
    { name: "Контакты", link: "#" },
  ];

  return (
    <Navbar className={className}>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="#" className="px-5 flex py-3">
          <div className="pt-[3px] px-[5px]">
            <LogIn size={14} />
          </div>
          <span>Войти</span>
        </NavbarButton>
      </NavBody>

      <MobileNav visible>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, i) => (
            <a key={i} href={item.link} onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex w-full flex-col space-y-4">
            <NavbarButton href="#">Sign In</NavbarButton>
            <NavbarButton href="#" variant="dark">
              Sign Up
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

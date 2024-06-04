"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./components-data/Logo";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Header() {
const [header, setHeader] = useState(false);
const pathname = usePathname();

const handleScroll = () => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
};

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <NavBar />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

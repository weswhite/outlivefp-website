"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
  ];

  const socialLinks = [
    {
      name: "X",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Instagram", 
      href: "#",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9902 11.9967C21.9902 13.3987 21.962 14.8047 21.9983 16.2067C22.0588 18.6885 20.4987 20.6062 18.5114 21.4603C17.7132 21.8027 16.8748 21.984 16.0081 21.984C13.2951 21.9881 10.5782 22.0243 7.86525 21.9719C5.82149 21.9317 4.14052 21.0776 2.93522 19.3935C2.30233 18.5072 2 17.5 2 16.4082C2 13.5195 2 10.6349 2 7.74629C2 5.38945 3.14886 3.74167 5.1886 2.67001C6.07544 2.2067 7.03888 2.00929 8.04262 2.00526C10.6749 2.00526 13.3113 1.98915 15.9436 2.01332C17.9874 2.02943 19.6925 2.81102 20.9502 4.45477C21.6516 5.37333 21.9902 6.42887 21.9902 7.58917C21.9902 9.05565 21.9902 10.5262 21.9902 11.9967ZM3.48748 11.9967C3.48748 13.4752 3.48748 14.9498 3.48748 16.4283C3.48748 17.0891 3.64066 17.7095 3.9833 18.2695C4.88224 19.74 6.24072 20.4571 7.92572 20.4853C10.6306 20.5256 13.3395 20.5014 16.0484 20.4934C16.7135 20.4934 17.3585 20.3564 17.9591 20.0704C19.5958 19.2888 20.5108 18.0439 20.5028 16.1745C20.4866 13.3141 20.4987 10.4536 20.4987 7.59319C20.4987 6.78341 20.269 6.04211 19.7893 5.38945C18.8621 4.13649 17.5802 3.52009 16.0484 3.50397C13.3476 3.47174 10.6467 3.49189 7.94588 3.49591C7.36943 3.49591 6.81314 3.61275 6.27297 3.81419C4.78952 4.36613 3.41089 5.76412 3.47538 7.82284C3.52376 9.2168 3.48748 10.6067 3.48748 11.9967Z" fill="currentColor"/>
          <path d="M12.0172 16.2672C9.41711 16.2672 7.32093 14.1964 7.3169 11.618C7.31287 9.07984 9.42517 7.00098 12.0091 7.00098C14.6011 6.99695 16.7053 9.07178 16.7094 11.6301C16.7094 14.1843 14.6092 16.2632 12.0172 16.2672ZM12.0172 14.7765C13.7868 14.7765 15.2219 13.3624 15.2179 11.622C15.2138 9.89768 13.7788 8.48761 12.0172 8.48761C10.2475 8.48761 8.80438 9.89365 8.80438 11.6301C8.80841 13.3705 10.2475 14.7806 12.0172 14.7765Z" fill="currentColor"/>
          <path d="M17.2539 5.59082C17.7981 5.59082 18.2415 6.05413 18.2415 6.62219C18.2375 7.19025 17.79 7.64953 17.2458 7.6455C16.7097 7.64147 16.2703 7.18219 16.2703 6.62622C16.2663 6.05816 16.7097 5.59082 17.2539 5.59082Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <nav className="absolute w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/outlive-logo.png"
                alt="Outlive Financial Planning"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary/80 hover:text-primary text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-primary/60 hover:text-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary/80 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-white/80 text-sm font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex space-x-4 pt-4 border-t border-white/20">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

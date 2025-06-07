"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import OutliveLogo from "./OutliveLogo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Planning", href: "/planning" },
    { name: "Our Blog", href: "/blog" },
    { name: "For Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <OutliveLogo size="md" showText={true} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-700 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary-700 focus:outline-none"
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-100">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-neutral-700 hover:text-primary-700 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

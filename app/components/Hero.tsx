"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-minimal min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-gold-400 mb-8">
            Outlive
            <br />
            your wealth
          </h1>

          <p className="text-lg md:text-xl font-light text-neutral-600 mb-16 max-w-lg">
            empowering your journey
            <br />
            through life's transitions
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="bg-gold-400 text-primary-700 px-8 py-4 font-medium text-lg hover:bg-gold-500 transition-all duration-300 text-center"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="border-2 border-primary-700 text-primary-700 px-8 py-4 font-medium text-lg hover:bg-primary-700 hover:text-white transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat w-full h-full"
        style={{
          backgroundImage: 'url("/images/hero-background.jpg")',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* White to transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-white via-50% to-transparent to-55% 
                        max-h-[600px]:bg-gradient-to-b max-h-[600px]:from-white max-h-[600px]:from-0% 
                        max-h-[600px]:via-white max-h-[600px]:via-75% max-h-[600px]:to-transparent max-h-[600px]:to-80%"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-start pt-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-primary mb-6">
            Live well now.
            <br />
            <span className="text-accent">Plan wisely for later.</span>
          </h1>

          <p className="text-lg md:text-xl font-light text-primary/80 mb-12 max-w-2xl mx-auto">
            I help you align your time, health, and money—so you can stop
            <br />
            waiting for "someday" and start living the life you actually want today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-white px-12 py-3 rounded-full font-medium text-lg hover:bg-accent/90 transition-all duration-300 text-center shadow-lg"
            >
              Schedule Free Call
            </Link>
            <Link
              href="/about"
              className="border-2 border-accent text-accent px-12 py-3 rounded-full font-medium text-lg hover:bg-accent hover:text-white transition-all duration-300 text-center shadow-sm"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <Services />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}

import React from "react";

export const metadata = {
  title: "Services - Outlive Financial Planning",
  description: "How We Can Work Together - Financial planning for intentional living, integrating your time, health, and money.",
};

export default function Services() {
  const clientTypes = [
    {
      icon: "🧠",
      title: "Think long-term",
      description: "And can deeply about their future health and freedom"
    },
    {
      icon: "🧭", 
      title: "Navigate complexity",
      description: "Such as high income, young kids, or real estate ownership"
    },
    {
      icon: "⚖️",
      title: "Value purpose over growth", 
      description: "Wanting to use money intentionally"
    },
    {
      icon: "🎯",
      title: "Are drawn to big ideas",
      description: "Such as Bitcoin, time freedom, or holistic living"
    },
    {
      icon: "💬",
      title: "Prefer real conversation",
      description: "Over one-size-fits-all advice"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-accent text-sm font-medium mb-4">Our Services</p>
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-6">
              How We Can Work Together
            </h1>
            <p className="text-primary/70 text-lg max-w-lg">
              Financial planning for intentional living—integrating your time, health, and money.
            </p>
          </div>

          <div className="w-12 h-0.5 bg-primary mb-12"></div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium text-primary mb-8 text-center">
              Who I Work Best With
            </h2>
            <p className="text-primary/70 text-center mb-12">
              I partner with individuals and families who:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {clientTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <h3 className="font-medium text-primary mb-2">{type.title}</h3>
                  <p className="text-sm text-primary/70">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
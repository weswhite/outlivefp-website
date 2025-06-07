"use client";

import React from "react";

const TestimonialsSection = () => {
  const features = [
    {
      title: "No product sales, no commissions, no kickbacks, no BS",
      description:
        "Not affiliated with any banks, brokerages, or insurance companies. We are not limited to certain products or archaic pricing models.",
    },
    {
      title: "Price based on service provided, not portfolio size",
      description:
        "Flat-fee reduces conflicts of interest and allows us to advise on held-away assets like 401(k)'s, real estate, and cryptocurrency.",
    },
    {
      title: "Technology-enhanced experience",
      description:
        "We leverage technology to enhance the customer experience and deliver massive value at a lower cost. Onboarding is paperless and we serve clients anywhere via video.",
    },
    {
      title: "Comprehensive financial planning",
      description:
        "Instead of focusing only on investments or insurance, we evaluate your entire financial ecosystem across dozens of planning areas.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's different about Outlive Financial Planning?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "Working with Outlive Financial Planning has given us the
                confidence to retire early and enjoy our golden years without
                financial stress. Their comprehensive approach and flat-fee
                structure make all the difference."
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  Sarah & Mike Johnson
                </p>
                <p className="text-gray-600">Retired Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from "react";

export const metadata = {
  title: "Services & Pricing - Outlive Financial Planning",
  description:
    "Comprehensive financial planning services with transparent flat-fee pricing. No commissions, no product sales, just independent financial advice.",
};

export default function Services() {
  const services = [
    {
      title: "Financial Life Design",
      price: "$4,500",
      description:
        "Complete financial plan covering all aspects of your wealth strategy",
      features: [
        "Values-based financial planning",
        "Tax optimization strategies",
        "Investment portfolio analysis",
        "Risk management review",
        "Estate planning coordination",
        "Cash flow optimization",
      ],
    },
    {
      title: "Ongoing Partnership",
      price: "$3,000/year",
      description:
        "Continuous support and adjustments to keep your plan on track",
      features: [
        "Quarterly plan reviews",
        "Annual strategy updates",
        "Tax planning consultations",
        "Email and phone support",
        "Market commentary",
        "Access to planning tools",
      ],
    },
    {
      title: "Investment Management",
      price: "0.75% annually",
      description:
        "Professional portfolio management with institutional-grade investments",
      features: [
        "Low-cost index fund portfolios",
        "Automatic rebalancing",
        "Tax-loss harvesting",
        "Asset location optimization",
        "Performance reporting",
        "Fiduciary management",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services & Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, flat-fee pricing with no hidden costs or
              commission-based sales. Our services are designed to help you
              stand strong in your wealth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 border-2 border-transparent hover:border-primary-300 transition-colors duration-200"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">
                    {service.price}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a complimentary consultation to discuss your financial
              goals and see how our services can help you achieve them.
            </p>
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

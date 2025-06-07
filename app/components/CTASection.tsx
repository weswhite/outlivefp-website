"use client";

import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Design Your Retirement Roadmap?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Take the first step toward retiring with confidence. Let's create a
          plan that minimizes your lifetime tax bill and maximizes your
          retirement experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="bg-secondary-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-400 transition-colors duration-200 shadow-lg"
          >
            Schedule Your Free Consultation
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors duration-200"
          >
            View Services & Pricing
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">No Commissions</div>
            <p className="opacity-90">
              Independent advice with flat-fee pricing
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Nationwide</div>
            <p className="opacity-90">
              Serving clients across the United States
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">$750K+</div>
            <p className="opacity-90">
              Minimum assets for our specialized service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

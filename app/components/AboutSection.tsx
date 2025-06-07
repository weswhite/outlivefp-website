import React from "react";

export const metadata = {
  title: "About Outlive Financial Planning - Our Story & Mission",
  description:
    "Learn about our mission to help high-performers achieve financial confidence through comprehensive financial life design and independent advice.",
};

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            About Outlive Financial Planning
          </h1>

          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-8 text-center">
              We're on a mission to help high-performers stand strong in their
              wealth and make the most of their financial journey.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-4">
                  At Outlive Financial Planning, we believe your finances should
                  empower your dreams and support your values. Our mission is to
                  help our clients build wealth that aligns with their life
                  goals through comprehensive, personalized financial planning.
                </p>
                <p className="text-gray-600">
                  We specialize in turning complex financial situations into
                  clear, actionable strategies that help you stand strong
                  through life's transitions and build lasting financial
                  confidence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Approach
                </h2>
                <p className="text-gray-600 mb-4">
                  Unlike traditional financial advisors who earn commissions on
                  product sales, we operate on a flat-fee model that eliminates
                  conflicts of interest. This allows us to provide truly
                  independent advice tailored to your unique situation.
                </p>
                <p className="text-gray-600">
                  We leverage cutting-edge technology to deliver comprehensive
                  planning services to clients nationwide, ensuring you receive
                  top-tier expertise regardless of your location.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Why "Outlive"?
              </h2>
              <p className="text-gray-600 text-center">
                The name "Outlive" represents our commitment to helping you
                build wealth that outlasts market volatility, economic
                uncertainty, and life's challenges. We help you create a
                financial foundation strong enough to outlive anything.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Ready to Start Your Financial Journey?
              </h2>
              <a
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

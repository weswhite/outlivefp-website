import React from "react";

export const metadata = {
  title: "About Outlive Financial Planning - Our Story & Mission",
  description:
    "Learn about our mission to help high-performers retire with confidence through tax-smart retirement income planning and independent financial advice.",
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
              We're on a mission to help high-performers retire with confidence
              and make the most of their "Outlive Financial a week".
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-4">
                  At Outlive Financial Planning, we believe retirement should be
                  a time of freedom, confidence, and joy. Our mission is to help
                  our clients transition from successful careers to fulfilling
                  retirements by providing comprehensive, tax-smart financial
                  planning.
                </p>
                <p className="text-gray-600">
                  We specialize in turning complex financial situations into
                  clear, actionable retirement roadmaps that minimize lifetime
                  tax bills and maximize retirement experiences.
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
                Why "Outlive Financial"?
              </h2>
              <p className="text-gray-600 text-center">
                The name "Outlive Financial Planning" represents our vision for
                your retirement: every day should feel like Saturday - relaxed,
                enjoyable, and filled with activities you love. We're here to
                make sure your finances support that lifestyle.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Ready to Start Planning Your Outlive Financial?
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

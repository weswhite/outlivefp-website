import React from "react";

export const metadata = {
  title: "How Outlive Is Different - More Than Money",
  description: "This is about time, health, and purpose. Learn how Outlive's approach to financial planning is different from traditional advisors.",
};

export default function HowOutliveIsDifferent() {
  const healthcareItems = [
    "High-quality food",
    "Daily movement and exercise", 
    "Proactive diagnostics, lab work, and testing",
    "Medical freedom, including out-of-pocket care and supplements"
  ];

  const timeItems = [
    "Creating a cash flow plan that supports abundance",
    "Choosing when enough is enough",
    "Structuring your finances to allow for flexibility, joy, and time with people you love"
  ];

  const purposeItems = [
    "Purpose-first planning",
    "Resilience in the face of uncertainty", 
    "Strategies that allow a sense of autonomy and purchasing power"
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <p className="text-accent text-sm font-medium mb-4">How Outlive Is Different</p>
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-6">
              More Than Money.<br />
              This Is About Time, Health, and Purpose.
            </h1>
            <p className="text-primary/70 text-lg">
              Most financial advice asks: How much do you need to retire someday?
            </p>
          </div>

          {/* Outlive Question Box */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
              <span className="text-primary font-medium">At Outlive</span>
              <span className="text-primary/70">, I ask a different question:</span>
            </div>
            <h2 className="text-xl font-medium text-primary mb-4">
              What would it take to live well today—without sacrificing tomorrow?
            </h2>
            <p className="text-primary/70 text-sm">
              I believe true wealth means having the freedom to spend your time well, invest in your health,<br />
              and integrate your money with what matters most.
            </p>
          </div>

          {/* You Only Get One Body Section */}
          <div className="mb-16">
            <div className="w-12 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-2xl font-medium text-primary mb-6">You Only Get One Body</h2>
            
            <p className="text-primary/70 mb-4">
              We plan for portfolios, real estate, education... <strong>But what about the body that carries you through it all?</strong>
            </p>
            
            <p className="text-primary/70 mb-6">
              We believe <span className="text-accent">your healthcare</span> is your <span className="text-accent">your wealth</span>. That means building a financial life <span className="text-accent">that supports</span>:
            </p>

            <ul className="space-y-3 mb-8">
              {healthcareItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-primary/70">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-primary/70">
              Your money should help you <span className="text-accent font-medium">stay strong</span>,<br />
              not just <span className="text-accent font-medium">look strong on paper</span>.
            </p>
          </div>

          {/* You Don't Get Time Back Section */}
          <div className="mb-16">
            <div className="w-12 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-2xl font-medium text-primary mb-6">You Don't Get Time Back</h2>
            
            <p className="text-primary/70 mb-6">
              Too many people sacrifice the best years of their lives for a future they may never reach.
            </p>
            
            <p className="text-primary/70 mb-6">
              At <span className="text-accent">Outlive</span>, I help you reclaim your time. That means:
            </p>

            <ul className="space-y-3 mb-8">
              {timeItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-primary/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-accent/10 p-6 rounded-lg">
              <p className="text-primary font-medium">
                I plan with intention—so your<br />
                <span className="text-accent">calendar reflects your values</span>.
              </p>
            </div>
          </div>

          {/* Finance 3.0 Section */}
          <div className="mb-16">
            <p className="text-accent text-sm font-medium mb-4">Finance 3.0</p>
            <h2 className="text-2xl font-medium text-primary mb-6">A New Model for a Changing World</h2>
            
            <p className="text-primary/70 mb-6">
              The world is changing—fast.
            </p>
            
            <p className="text-primary/70 mb-6">
              From rising healthcare costs and longer lifespans to unsustainable debt and a weakening dollar, the old model of financial advice is <span className="line-through">old</span>.
            </p>
            
            <p className="text-primary/70 mb-6">
              At <span className="text-accent">Outlive</span>, I take a forward-thinking approach to wealth:
            </p>

            <ul className="space-y-3 mb-8">
              {purposeItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-primary/70">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-primary/70 mb-6">
              Inspired by <span className="text-accent">thinkers like Dr. Peter Attia</span> in healthcare and <span className="text-accent">Chamath Palihapitiya and Lyn Alden</span> in macroeconomics, I believe your financial plan should not only grow—but endure.
            </p>

            <p className="text-primary/70 mb-8">
              This means moving away from ideas like <span className="text-accent">the 4% Rule</span> as a potential long-term store of value—one that operates outside a system defined by centralization and necessary expansion.
            </p>

            {/* Bottom CTA Box */}
            <div className="bg-primary text-white p-8 rounded-lg text-center relative">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-8 h-6 bg-primary rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">I don't sell products. I don't take</p>
                <p className="font-medium">commissions. I'm a fee-only fiduciary.</p>
                <p className="font-medium">That means our only commitment is to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
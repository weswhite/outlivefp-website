import React from "react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Why I built this product section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium mb-4">Why I built this product</p>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-16">
            To help you stop waiting for "Someday"
          </h2>
        </div>
      </section>

      {/* But what if later never comes section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium mb-4">You've been told to sacrifice now and live later</p>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-16">
            But what if later never comes?
          </h2>
        </div>
      </section>

      {/* Comparison section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="/images/3e56a2659e62ed782670829113d966303f78f728.png" 
                  alt="Outlive icon" 
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Face Money Baggage</h3>
              <p className="text-primary/70">
                Money anxiety that's keeping you "safe" in a life of stress, overwhelm and boredom.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="/images/3e56a2659e62ed782670829113d966303f78f728.png" 
                  alt="Outlive icon" 
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">Disconnection from purpose</h3>
              <p className="text-primary/70">
                You're living a life for someone else while your deepest values remain dormant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Survive Without Suffering section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-primary mb-4">Survive Without Suffering</h3>
          <p className="text-primary/70 mb-8">
            Learn what to expect. Plan around the bad things.
          </p>
          <div className="bg-primary text-white p-6 rounded-lg">
            <p className="text-sm">
              Neither you (Herent should support your purpose) learn your values. Remove this to be kind of right therapy for your mental health.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Zach Rodriguez section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-medium mb-4">Your Financial Guide</p>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-12">
            Meet Zach Rodriguez
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/zach-rodriguez.jpg" 
                alt="Zach Rodriguez" 
                className="w-full max-w-sm mx-auto rounded-lg"
              />
            </div>
            <div>
              <p className="text-primary/70 mb-6">
                After navigating stressful trials and unexpected transitions, <strong>Zach founded Outlive Financial Planning</strong> as a Registered Investment Advisor (you know, legally, but we can write more here).
              </p>
              <p className="text-primary/70 mb-6">
                As a state-licensed financial advisor focusing primarily on counseling of strategic insight, transparency, and deep empathy.
              </p>
              <div className="mb-6">
                <p className="text-sm font-medium text-primary mb-2">Zach Rodriguez</p>
                <p className="text-xs text-primary/60">
                  Founder & Your Outlive Financial Planning<br/>
                  Registered Investment Advisory Representative
                </p>
              </div>
              <p className="text-xs text-primary/60 mb-8">
                California insurance license, Certified Financial Planning ™, and smart thinking. If only you didn't mind to know that.
              </p>
              
              <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-all duration-300">
                Zach's Story →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Zach Rodriguez - Outlive Financial Planning",
  description: "From Navy Pilot to Financial Guide - Learn about Zach's journey and why he founded Outlive Financial Planning.",
};

export default function About() {
  const whoItsFor = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Raise healthy families",
      description: ""
    },
    {
      icon: "🎯",
      title: "Design flexible careers", 
      description: ""
    },
    {
      icon: "⚡",
      title: "Optimize for vitality",
      description: ""
    },
    {
      icon: "💰",
      title: "Build wealth that aligns with who they are",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <p className="text-accent text-sm font-medium mb-4">About Zach Rodriguez</p>
            <h1 className="text-3xl md:text-4xl font-light text-primary mb-6">
              From Navy Pilot to<br />Financial Guide
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-primary/70 mb-6">
                I founded <strong>Outlive Financial Planning</strong> after years of chasing success in ways that looked good on paper—but left me feeling disconnected from what truly mattered.
              </p>
              
              <div className="relative">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.625 9.1875C5.625 12.6938 8.49375 15.5625 12 15.5625C15.5063 15.5625 18.375 12.6938 18.375 9.1875C18.375 5.68125 15.5063 2.8125 12 2.8125C8.49375 2.8125 5.625 5.68125 5.625 9.1875ZM16.875 9.1875C16.875 11.8687 14.6812 14.0625 12 14.0625C9.31875 14.0625 7.125 11.8687 7.125 9.1875C7.125 6.50625 9.31875 4.3125 12 4.3125C14.6812 4.3125 16.875 6.50625 16.875 9.1875Z" fill="#9CA3AF"/>
                    <path d="M4.5751 22.3875C6.5626 20.4 9.1876 19.3125 12.0001 19.3125C14.8126 19.3125 17.4376 20.4 19.4251 22.3875L20.4938 21.3187C18.2251 19.0687 15.2063 17.8125 12.0001 17.8125C8.79385 17.8125 5.7751 19.0687 3.50635 21.3187L4.5751 22.3875Z" fill="#9CA3AF"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="/images/about-1.png"
                alt="Zach Rodriguez as Navy Pilot"
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* My Journey Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-primary mb-8">My journey</h2>
            
            <div className="space-y-6 text-primary/70">
              <p>
                My journey began in the cockpit of a Navy helicopter. I spent my twenties in high-stakes situations—making split-second decisions, finding order amidst complexity, and building detected by hard work, performance, and resilience. But six months into my first squadron tour, a helicopter crash landing to the aft end of an aircraft carrier changed everything.
              </p>
              
              <p>
                I walked away physically intact—but <strong>mentally and emotionally</strong>, something cracked open.
              </p>
              
              <p>
                That moment planted a seed: <em>"Life is fragile, and time is irreplaceable."</em><br />
                I started to ask questions I had long avoided.
              </p>
              
              <p>
                What's the point of building wealth if you're not present for your life?<br />
                What are we working so hard to get <strong>not to live well now</strong>?
              </p>
              
              <p>
                That curiosity sent me down an unexpected path.
              </p>
              
              <p>
                I explored environmental science, soil health, medicine, and eventually <strong>financial planning</strong>—not as a career, but as a way to understand how people make choices.
              </p>
              
              <p>
                I saw how easy it is to drift through life—even with a good paycheck and a solid resume—and still feel purposeless, or behind.
              </p>
              
              <p>
                Eventually, I realized that the world doesn't need more traditional advisors.<br />
                It needs guides—people who bridge the gap between money and meaning.
              </p>
              
              <p>
                So I started <strong>Outlive Financial Planning</strong>. A firm grounded in two simple truths:
              </p>
              
              <div className="flex items-start space-x-4 bg-primary text-white p-6 rounded-lg">
                <span className="text-accent text-xl">💡</span>
                <div>
                  <p className="mb-2"><strong>You only get one body.</strong></p>
                  <p><strong>You don't get time back.</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Who It's For Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-medium text-primary mb-8 text-center">Who It's For</h2>
            <p className="text-primary/70 text-center mb-8">
              Outlive is for people like me—people who want to live intentionally now, without sacrificing their future.
            </p>
            <p className="text-primary/70 text-center mb-12">People who want to:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {whoItsFor.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-medium text-primary text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-primary text-white px-8 py-4 rounded-lg inline-block">
                <p className="font-medium">
                  <span className="bg-accent text-white px-2 py-1 rounded-full text-sm mr-2">🌟</span>
                  People who are ready to stop outsourcing joy to "someday!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
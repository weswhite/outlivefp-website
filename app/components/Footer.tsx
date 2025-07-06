"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-neutral-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                You don't have to wait to{" "}
                <span className="text-accent">live well.</span>
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Let's design what comes next.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Book Free Call
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Outlive the Ordinary.</h3>
              <p className="text-white/90 mb-6">
                Twice-monthly emails with practical ideas to help you align your time, health, and money — and live with purpose.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-6 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors duration-200">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer Section */}
      <div className="bg-neutral-100 text-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Quick Nav */}
            <div>
              <h3 className="text-sm font-semibold mb-6 uppercase tracking-wide">QUICK NAV</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-outlive-is-different"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    How Outlive Is Different
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold mb-6 uppercase tracking-wide">LEGAL</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/adv"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Form ADV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclosures"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    Disclosures
                  </Link>
                </li>
              </ul>
            </div>
        </div>

          {/* Disclaimers */}
          <div className="space-y-4 mb-12 text-xs text-primary/70 leading-relaxed">
            <p>
              Advisory services are offered through Outlive Financial Planning, a registered investment adviser in the state of California. Services are provided only where Outlive Financial Planning and its representatives are properly licensed or exempt from licensure. No advice may be rendered by Outlive Financial Planning unless a client service agreement is in place.
            </p>
            <p>
              The content on this site is for informational purposes only and should not be considered legal, tax, or investment advice. Nothing on this site constitutes a recommendation, offer, or solicitation to buy or sell any securities or investment strategies. You should always consult your legal, tax, or financial professionals for advice specific to your situation.
            </p>
            <p>
              All investments involve risk, including potential loss of principal. Past performance is not indicative of future results. Information is provided "as is" without warranties of any kind and may not be error-free. Use of this site and its contents is at your own risk.
            </p>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/outlive-logo.png"
                alt="Outlive Financial Planning"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-xs text-primary/70">
              Outlive Financial Planning LLC 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

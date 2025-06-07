"use client";

import React from "react";
import Link from "next/link";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Dark Side of Outlive Financial a Week",
      excerpt:
        "Here are five key strategies that can help you avoid the landmines and secure the happy, fulfilling next chapter that you deserve.",
      date: "June 2, 2025",
      slug: "dark-side-7-saturdays",
    },
    {
      title: "Questions To Ask A Financial Advisor",
      excerpt:
        'These questions are designed to help you see "behind the curtain" of our firm and others you might consider hiring.',
      date: "February 14, 2025",
      slug: "questions-financial-advisor",
    },
    {
      title: "10 Best Mint Alternatives To Manage Your Money in 2024",
      excerpt:
        "If managing your money better is one of your New Year's goals, here are the best alternatives to Mint for budgeting and expense tracking.",
      date: "February 23, 2024",
      slug: "mint-alternatives",
    },
    {
      title: "How To Teach Kids About Money: 12 Smart Strategies",
      excerpt:
        "Parents have a lot of jobs, each as important as the next. Teaching financial literacy is one of the most valuable gifts you can give.",
      date: "February 23, 2024",
      slug: "teach-kids-money",
    },
    {
      title: "How Much Does Health Insurance Cost for Early Retirees?",
      excerpt:
        "Early retirement is a great goal, but many overlook one important factor: health insurance costs can be significant.",
      date: "February 23, 2024",
      slug: "health-insurance-early-retirement",
    },
    {
      title: "3 Best Ways To Build Wealth for High-Earning Engineers",
      excerpt:
        "The best ways to build wealth for high-earning engineers aren't always what you might expect. Here's what really works.",
      date: "February 23, 2024",
      slug: "wealth-building-engineers",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Recent Posts
          </h2>
          <p className="text-lg text-gray-600">
            Financial insights and retirement planning strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block"
          >
            READ MORE INSIGHTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

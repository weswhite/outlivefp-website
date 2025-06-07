import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Outlive Financial Planning - Wealth Management & Financial Life Design",
  description:
    "Professional financial advice that empowers you to protect and celebrate your hard earned money. Fee-only, fiduciary financial planning.",
  keywords:
    "financial planning, wealth management, financial advisor, fee-only, fiduciary, financial life design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReCaptchaProviderWrapper from "@/components/ReCaptchaProviderWrapper";

export const metadata: Metadata = {
  title: "Agua Plumbing",
  description:
    "With over 20 years of trusted service, Agua Plumbing delivers the best plumbing solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReCaptchaProviderWrapper>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </ReCaptchaProviderWrapper>
      </body>
    </html>
  );
}

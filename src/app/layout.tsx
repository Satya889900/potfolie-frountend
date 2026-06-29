import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CTA from "../components/home/CTA";
import ThemeProvider from "../context/ThemeProvider";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="bg-[#f4f6f0] dark:bg-[#0f1714] text-[#2a3b34] dark:text-gray-200 overflow-x-hidden">
        <ThemeProvider>
          <Navbar />

          {children}

          <CTA />

          <Footer />

          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
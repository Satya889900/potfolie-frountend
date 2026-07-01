import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CTA from "../components/home/CTA";
import ThemeProvider from "../context/ThemeProvider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="bg-[#f4f6f0] dark:bg-[#0f1714] text-[#2a3b34] dark:text-gray-200 overflow-x-hidden">
        <ThemeProvider>
          <NextTopLoader
            color="#b8905b"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #b8905b,0 0 5px #b8905b"
          />
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
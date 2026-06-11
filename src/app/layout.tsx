import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ThemeProvider from "../context/ThemeProvider";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f4f6f0] dark:bg-[#0f1714] text-[#2a3b34] dark:text-gray-200 transition-colors duration-500">
        <ThemeProvider>
          <Navbar />

          {children}

          <Footer />

          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
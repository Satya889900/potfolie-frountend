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
      <body>
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
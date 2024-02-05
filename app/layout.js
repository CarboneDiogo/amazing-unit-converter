import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Awesome Unit Converter",
  description: "SAIT's Webdevelopment project One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col p-12">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

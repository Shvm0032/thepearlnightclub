import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from './../components/Footer';

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "The Pearl Nightclub - Premium Nightlife Experience",
  description:
    "Join us for exclusive cocktails, live entertainment, and unforgettable nights at The Pearl.",
  generator: "v0.app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

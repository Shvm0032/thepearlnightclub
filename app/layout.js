import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footers from "@/components/Footers";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "The Pearl – The Pearl-Bar Club Event",
  description:
    "Join us for exclusive cocktails, live entertainment, and unforgettable nights at The Pearl.",
    icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footers/>
      </body>
    </html>
  );
}

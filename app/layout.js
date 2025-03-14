import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smooth Move | Best Concrete Pumping Services",
  description: "Get the best concrete pumping services with Smooth Move. Reliable, fast, and professional.",
  robots: "index, follow",
  openGraph: {
    title: "Smooth Move Concrete Pumping",
    description: "Top-rated concrete pumping services for all projects.",
    images: ["https://smoothmovecp.com/og-image.jpg"],
    url: "https://yourwebsite.com/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smooth Move Concrete Pumping",
  "image": "https://yourwebsite.com/logo.png",
  "url": "https://yourwebsite.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "525 S. Mill Street",
    "addressLocality": "Creswell",
    "addressRegion": "OR",
    "postalCode": "97426",
    "addressCountry": "US"
  },
  "telephone": "+1-555-555-5555"
};

export default function RootLayout({ children }) {
  return (
    <html>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header />
      {children}
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />
    </body>
    </html>
  );
}

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
  title: "Smooth Move Concrete Pumping | Best Concrete Pumping Services",
  description: "Get the best concrete pumping services with Smooth Move. Reliable, fast, and professional.",
  robots: "index, follow",
  openGraph: {
    title: "Smooth Move Concrete Pumping | Best Concrete Pumping Services",
    description: "Top-rated concrete pumping services for all projects.",
    images: ["https://smoothmovecp.com/Img/Contact_BG.JPG"],
    url: "https://smoothmovecp.com/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smooth Move Concrete Pumping",
  "image": "https://smoothmovecp.com/Img/Smooth_Move_Logo_White.png",
  "url": "https://smoothmovecp.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "525 S. Mill Street",
    "addressLocality": "Creswell",
    "addressRegion": "OR",
    "postalCode": "97426",
    "addressCountry": "US"
  },
  "telephone": "+1-541-345-2562",
  "openingHours": [
    "Mo-Fr 07:00-17:00"
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.9180457513323",
    "longitude": "-123.01824325959662"
  }
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel='canonical' href="https://smoothmovecp.com/" />
      </head>
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

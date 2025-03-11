import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
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
  title: "Smooth Move Concrete Pumping",
  description: "Get the best concrete pumping services with Smooth Move. Reliable, fast, and professional.",
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
    <>
     
    
    <Head>
        <title>Best Concrete Pumping Services | Smooth Move</title>
        <meta name="description" content="Get the best concrete pumping services with Smooth Move. Reliable, fast, and professional." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Smooth Move Concrete Pumping" />
        <meta property="og:description" content="Top-rated concrete pumping services for all projects." />
        <meta property="og:image" content="https://smoothmovecp.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header />
        {children}
    <Footer />
      </body>
    </html>
    </>
  );
}

// app/layout.jsx

import "./globals.css";
import "react-modern-drawer/dist/index.css";
import "swiper/css";

import { Poppins } from "next/font/google";
import CustomCursor from "@/src/components/shared/CustomCursor";
import BackToTop from "@/src/components/shared/BackToTop";
import Script from "next/script"; // ✅ para GTM

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hello, I'm Rus Madrigal | Senior Technical SEO & Data Enthusiast",
  description:
    "Senior SEO professional with over 14 years of experience. Here, you can find my CV and examples of my previous work.",
  alternates: {
    canonical: "https://rusmadrigal.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* ✅ Google Tag Manager (head) */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K2HNLR7W');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} relative`}>
        {/* ✅ GTM fallback (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2HNLR7W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <main>
          {children}
          <CustomCursor />
          <BackToTop />
        </main>
      </body>
    </html>
  );
}
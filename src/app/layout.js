import './globals.css';
import Script from "next/script";
import { Inter } from "next/font/google";


export const metadata = {
  title: 'AI & Machine Learning Program for Working Professionals | Dandes Academy',
  description:
    'Upskill in AI & ML without quitting your job. A structured 12-month program for working professionals to build real-world AI projects, transition into high-growth roles, and unlock higher-paying opportunities.',
  keywords: [
    'AI ML course for working professionals',
    'machine learning upskilling program',
    'AI career transition for software engineers',
    'AI ML program India',
    'upskill in AI while working',
    'machine learning for experienced professionals',
    'AI course for tech leads',
    'MLOps training professionals',
    'AI career switch program',
    'Dandes Academy professionals',
    'deep learning course working professionals',
    'AI ML program for engineers India',
    'career transition to AI ML',
    'machine learning certification professionals 2026',
  ],
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W865WG7N');
          `}
        </Script>
        {/* End Google Tag Manager */}

      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W865WG7N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <main className="pt-[90px] min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}
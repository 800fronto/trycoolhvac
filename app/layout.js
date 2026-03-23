
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://trycoolhvac.com'),
  title: "CoolHVAC | AC Repair & HVAC Services Washington DC",
  description: "CoolHVAC provides 24/7 AC repair, heating repair, and HVAC installation across Washington DC, Maryland, and Northern Virginia. NATE-certified technicians, same-day service, upfront pricing. Call 202-455-0020.",
  openGraph: {
    title: "CoolHVAC | Reliable Heating & AC Services",
    description: "Expert HVAC services across the DC metro area. Same-day service, upfront pricing, 100% satisfaction guarantee.",
    type: "website",
    locale: "en_US",
    siteName: "CoolHVAC",
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoolHVAC | Heating & AC Services",
    description: "Expert HVAC services across the DC metro area. Same-day service, upfront pricing, satisfaction guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VMCVSFJ72"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8VMCVSFJ72');
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

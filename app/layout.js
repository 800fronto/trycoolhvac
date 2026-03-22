
import "./globals.css";

export const metadata = {
  title: "CoolHVAC | Heating & AC Services in Washington DC",
  description: "AC repair, heating repair, and HVAC installation across the DC metro area. 24/7 emergency service. Upfront pricing. Satisfaction guaranteed. Serving DC, Maryland & Northern Virginia.",
  keywords: "HVAC, AC repair, heating repair, air conditioning, furnace repair, DC, Maryland, Virginia, Washington DC",
  openGraph: {
    title: "CoolHVAC | Reliable Heating & AC Services",
    description: "Expert HVAC services across the DC metro area. Same-day service, upfront pricing, 100% satisfaction guarantee.",
    type: "website",
    locale: "en_US",
    siteName: "CoolHVAC",
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

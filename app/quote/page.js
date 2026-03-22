
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QuoteCalculator from "../../components/QuoteCalculator";

export const metadata = {
  title: "HVAC Quote Calculator | Estimate Your Cost | CoolHVAC",
  description: "Get an instant HVAC cost estimate for AC repair, heating repair, and system installation in the DC metro area. Free online quote calculator.",
};

export default function QuotePage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm font-medium text-gray-200">Free estimates — no obligation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">HVAC Quote Calculator</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Get an instant cost estimate for your HVAC project. Answer a few questions about your home and needs, and we will provide a price range based on typical costs in the DC metro area.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.25-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H12.75v-.008zm0 2.25h.008v.008H12.75v-.008zm2.25-2.25h.008v.008H15v-.008zm0 2.25h.008v.008H15v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy-900">Estimate Your HVAC Costs</h2>
              <p className="text-sm text-gray-500">Select your options below for an instant estimate</p>
            </div>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-blue-800 text-white py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "check", label: "Upfront Pricing" },
            { icon: "shield", label: "Licensed & Insured" },
            { icon: "star", label: "4.9/5 Rating" },
            { icon: "clock", label: "Same-Day Service" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                {item.icon === "check" && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
                {item.icon === "shield" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>}
                {item.icon === "star" && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
                {item.icon === "clock" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
              </div>
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="text-2xl font-black text-navy-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How accurate is this HVAC cost estimate?",
                a: "This calculator provides a general price range based on typical costs in the Washington DC metro area. Actual pricing depends on specific equipment, complexity, and current promotions. We always provide an exact, written quote before beginning any work."
              },
              {
                q: "Is the in-home estimate really free?",
                a: "Yes! We offer free in-home estimates for all installations and major repairs. A CoolHVAC technician will assess your home, discuss your options, and provide an exact written quote with no obligation."
              },
              {
                q: "Do you offer financing for HVAC installations?",
                a: "Yes, we offer flexible financing options for qualifying customers. Monthly payments start as low as $89/month for a complete system replacement. Ask about our 0% APR promotional financing."
              },
              {
                q: "How long does an HVAC installation take?",
                a: "Most residential HVAC installations are completed in one day. Complex installations or ductwork modifications may take 2-3 days. We will provide a timeline with your written estimate."
              },
              {
                q: "What brands do you install and service?",
                a: "We are certified to install and service all major HVAC brands including Carrier, Lennox, Trane, Rheem, Goodman, and more. We will recommend the best system for your home and budget."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

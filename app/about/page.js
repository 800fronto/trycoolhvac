import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About CoolHVAC | Minority-Owned HVAC Company Serving DC Since 2009",
  description: "CoolHVAC (JMO HVAC Service Inc.) is a minority-owned, family-operated HVAC company serving Washington DC, Maryland, and Virginia since 2009. NATE-certified, EPA 608 licensed, and community-rooted.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-200">Minority-Owned &amp; Family-Operated</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Keeping the DMV Comfortable Since 2009</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">Honest, reliable HVAC service from people who actually care about the work and the folks they&apos;re doing it for.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "10,000+", label: "Homes Served" },
              { number: "24/7", label: "Emergency Service" },
              { number: "4.9/5", label: "Customer Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-black">{stat.number}</p>
                <p className="text-sm text-blue-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Our Story</p>
            <h2 className="text-3xl font-black text-navy-900 mb-5">Built on Trust, Driven by Service</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>CoolHVAC started the way a lot of good things do — around the family dinner table. Back in 2009, we saw an opportunity to bring something the DC metro area needed more of: honest, reliable HVAC service from people who actually care about the work and the folks they&apos;re doing it for.</p>
              <p>As a minority-owned, family-operated business, we&apos;ve always taken pride in doing things the right way. No shortcuts, no upsells you don&apos;t need, no disappearing after the job is done. When we show up at your door, you&apos;re not getting a stranger — you&apos;re getting a neighbor who&apos;s going to treat your home or business the way we&apos;d treat our own.</p>
              <p>Over the past 17 years, we&apos;ve grown from a small residential operation into a full-service HVAC company serving homes, offices, retail spaces, and commercial buildings across DC, Maryland, and Virginia — now covering 163+ communities in the DC metro area.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Our Credentials</h3>
            <div className="space-y-4">
              {[
                { title: "NATE Certified", desc: "All technicians hold current NATE certification" },
                { title: "EPA Licensed", desc: "Fully licensed for refrigerant handling and disposal" },
                { title: "Licensed & Insured", desc: "Licensed in DC, Maryland, and Virginia" },
                { title: "Background Checked", desc: "Every technician passes comprehensive background checks" },
              ].map((cred, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-navy-900">{cred.title}</p>
                    <p className="text-gray-500 text-sm">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-50 py-12 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">Brands We Install & Service</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Carrier", "Lennox", "Trane", "Rheem", "Goodman", "Daikin", "York", "Bryant"].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-gray-300 hover:text-gray-500 transition cursor-default tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Ready for reliable HVAC service?</h3>
            <p className="text-red-100">Schedule your appointment today — satisfaction guaranteed.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center space-x-2">
            <span>Schedule Service</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

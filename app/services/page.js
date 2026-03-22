
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Air Conditioning Repair",
    desc: "Is your AC blowing warm air or making strange noises? Our certified technicians diagnose and repair all makes and models of air conditioning systems. We provide same-day service across the DC metro area.",
    features: ["Same-day emergency service", "All makes and models", "Upfront pricing guarantee", "Parts and labor warranty"],
    badge: "Most Popular",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
    ),
  },
  {
    title: "Heating & Furnace Repair",
    desc: "Don't get left in the cold. From furnaces to heat pumps, we provide fast, reliable heating repair services. Our team is available 24/7 for emergency heating issues.",
    features: ["24/7 emergency repairs", "Furnace and heat pump service", "Carbon monoxide safety checks", "Energy efficiency assessments"],
    badge: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
      </svg>
    ),
  },
  {
    title: "HVAC System Installation",
    desc: "Upgrading your HVAC system? We install high-efficiency heating and cooling systems tailored to your home's needs. Financing options are available to fit your budget.",
    features: ["Free in-home estimates", "High-efficiency systems", "Flexible financing options", "Professional installation guarantee"],
    badge: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.112A2.25 2.25 0 014.5 10.014V8.25a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v1.764a2.25 2.25 0 01-1.536 2.044l-5.384 3.112a2.25 2.25 0 01-2.26 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 18v-6.75M17.25 18v-6.75"/>
      </svg>
    ),
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular maintenance keeps your system running efficiently and prevents costly breakdowns. Our maintenance plans include seasonal tune-ups and priority scheduling.",
    features: ["Seasonal tune-ups", "Priority scheduling", "Extended equipment life", "Lower energy bills"],
    badge: "Best Value",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.112A2.25 2.25 0 014.5 10.014V8.25M17.25 18v-6.75M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75"/>
      </svg>
    ),
  },
  {
    title: "Indoor Air Quality",
    desc: "Breathe easier with our indoor air quality solutions. We install and service air purifiers, humidifiers, and ventilation systems to keep your home healthy and comfortable.",
    features: ["Air purifier installation", "Duct cleaning", "Humidity control", "Ventilation solutions"],
    badge: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33"/>
      </svg>
    ),
  },
  {
    title: "Commercial HVAC Services",
    desc: "We provide commercial heating and cooling services for businesses of all sizes. From office buildings to retail spaces, our team has the expertise to keep your business comfortable.",
    features: ["Commercial system installation", "Preventive maintenance contracts", "Emergency service", "Energy management solutions"],
    badge: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
  },
];

const brands = ["Carrier", "Lennox", "Trane", "Rheem", "Goodman", "Daikin", "York", "Bryant"];

export default function Services() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-sm font-medium text-gray-200">All services include our upfront pricing guarantee</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Our HVAC Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            From routine maintenance to emergency repairs and full system installations, CoolHVAC has you covered across the DC metro area.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-bold">HVAC Emergency?</span>
          </div>
          <span className="text-red-100 text-sm">Our technicians are available 24/7 for urgent repairs.</span>
          <a href="tel:2025551234" className="bg-white text-red-600 font-bold text-sm px-5 py-2 rounded-lg hover:bg-red-50 transition flex-shrink-0">
            Call (202) 555-1234
          </a>
        </div>
      </div>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition relative group">
              {service.badge && (
                <span className="absolute top-4 right-4 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.badge}
                </span>
              )}
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-5 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center space-x-2.5">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex-shrink-0">
                  <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition inline-flex items-center space-x-2 shadow-sm">
                    <span>Get a Quote</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands We Service */}
      <section className="bg-gray-50 py-12 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-8">Brands We Install & Service</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-gray-300 hover:text-gray-500 transition cursor-default tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-14 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Need HVAC Service Today?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Call us now or schedule online — we offer same-day service for most repairs across the DC metro area.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg shadow-red-600/25 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Schedule Service</span>
            </a>
            <a href="tel:2025551234" className="bg-white text-blue-800 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>(202) 555-1234</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

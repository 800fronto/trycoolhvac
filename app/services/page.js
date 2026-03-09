
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Air Conditioning Repair",
    desc: "Is your AC blowing warm air or making strange noises? Our certified technicians diagnose and repair all makes and models of air conditioning systems. We provide same-day service across the DC metro area.",
    features: ["Same-day emergency service", "All makes and models", "Upfront pricing guarantee", "Parts and labor warranty"],
  },
  {
    title: "Heating & Furnace Repair",
    desc: "Don't get left in the cold. From furnaces to heat pumps, we provide fast, reliable heating repair services. Our team is available 24/7 for emergency heating issues.",
    features: ["24/7 emergency repairs", "Furnace and heat pump service", "Carbon monoxide safety checks", "Energy efficiency assessments"],
  },
  {
    title: "HVAC System Installation",
    desc: "Upgrading your HVAC system? We install high-efficiency heating and cooling systems tailored to your home's needs. Financing options are available to fit your budget.",
    features: ["Free in-home estimates", "High-efficiency systems", "Flexible financing options", "Professional installation guarantee"],
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular maintenance keeps your system running efficiently and prevents costly breakdowns. Our maintenance plans include seasonal tune-ups and priority scheduling.",
    features: ["Seasonal tune-ups", "Priority scheduling", "Extended equipment life", "Lower energy bills"],
  },
  {
    title: "Indoor Air Quality",
    desc: "Breathe easier with our indoor air quality solutions. We install and service air purifiers, humidifiers, and ventilation systems to keep your home healthy and comfortable.",
    features: ["Air purifier installation", "Duct cleaning", "Humidity control", "Ventilation solutions"],
  },
  {
    title: "Commercial HVAC Services",
    desc: "We provide commercial heating and cooling services for businesses of all sizes. From office buildings to retail spaces, our team has the expertise to keep your business comfortable.",
    features: ["Commercial system installation", "Preventive maintenance contracts", "Emergency service", "Energy management solutions"],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Our HVAC Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            From routine maintenance to emergency repairs and full system installations, TryCool HVAC has you covered. All services include our upfront pricing guarantee.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded font-semibold text-sm transition inline-block">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need HVAC Service Today?</h2>
          <p className="text-blue-200 mb-6">Call us now or schedule online — we offer same-day service for most repairs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition">Schedule Service</a>
            <a href="tel:2025551234" className="bg-white text-blue-800 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">(202) 555-1234</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

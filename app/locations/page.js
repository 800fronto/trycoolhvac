
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const areas = [
  { name: "Washington DC", desc: "Full HVAC services across all DC neighborhoods." },
  { name: "Bethesda, MD", desc: "Heating and cooling for Bethesda homes and businesses." },
  { name: "Rockville, MD", desc: "Fast HVAC repair and installation in Rockville." },
  { name: "Silver Spring, MD", desc: "Reliable service throughout Silver Spring." },
  { name: "Arlington, VA", desc: "Expert HVAC technicians serving Arlington." },
  { name: "Alexandria, VA", desc: "Same-day heating and AC repair in Alexandria." },
  { name: "Fairfax, VA", desc: "Comprehensive HVAC solutions for Fairfax County." },
  { name: "Gaithersburg, MD", desc: "Professional heating and cooling in Gaithersburg." },
];

export default function Locations() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Service Areas</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            TryCool HVAC proudly serves the entire DC metro area, including Maryland and Northern Virginia. Find your local service area below.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-800 transition text-center">
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">{area.name}</h3>
              <p className="text-gray-600 text-sm">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Don&apos;t see your area?</h3>
            <p className="text-red-100">Call us — we may still be able to help.</p>
          </div>
          <a href="tel:2025551234" className="bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
            (202) 555-1234
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

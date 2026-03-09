
import { notFound } from "next/navigation";
import locations from "../../../data/locations";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) return {};

  const title = `HVAC Services in ${loc.city}, ${loc.state} | TryCool HVAC`;
  const description = `Professional heating and air conditioning services in ${loc.city}, ${loc.state}. AC repair, furnace repair, and HVAC installation. Call (202) 555-1234 for same-day service in ${loc.county}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

function getNearbyLocations(currentSlug, currentRegion) {
  return locations
    .filter((l) => l.slug !== currentSlug && l.region === currentRegion)
    .slice(0, 6);
}

function getSeasonalContent(loc) {
  const stateContent = {
    DC: {
      summer: "Washington DC summers bring extreme heat and humidity, with temperatures regularly exceeding 95°F. A reliable air conditioning system is essential for comfort and health.",
      winter: "DC winters can be unpredictable, with temperatures dropping into the 20s and occasional ice storms. A well-maintained heating system keeps your home safe and warm.",
    },
    MD: {
      summer: `${loc.county} experiences hot, humid summers that put significant strain on air conditioning systems. Regular maintenance helps prevent mid-summer breakdowns when you need cooling most.`,
      winter: `Maryland winters in ${loc.county} bring freezing temperatures and heavy snowfall. A dependable furnace or heat pump is critical for keeping your family comfortable through the cold months.`,
    },
    VA: {
      summer: `Northern Virginia summers are known for intense heat and humidity. Homes in ${loc.city} depend on efficient air conditioning to stay comfortable from June through September.`,
      winter: `${loc.city} homeowners face cold winters with temperatures frequently below freezing. Reliable heating service ensures your family stays warm and your pipes stay protected.`,
    },
  };
  return stateContent[loc.state] || stateContent.DC;
}

export default function LocationPage({ params }) {
  const loc = locations.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  const nearby = getNearbyLocations(loc.slug, loc.region);
  const seasonal = getSeasonalContent(loc);

  const services = [
    {
      title: `AC Repair in ${loc.city}`,
      desc: `Fast, reliable air conditioning repair for homes and businesses in ${loc.city}, ${loc.state}. Our certified technicians diagnose and fix all AC makes and models with same-day service available.`,
      features: ["Same-day emergency service", "All AC brands serviced", "Upfront flat-rate pricing", "Parts and labor warranty"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
        </svg>
      ),
    },
    {
      title: `Heating & Furnace Repair in ${loc.city}`,
      desc: `Don't get left in the cold. TryCool HVAC provides expert furnace and heat pump repair throughout ${loc.city} and surrounding ${loc.county} areas. Available 24/7 for heating emergencies.`,
      features: ["24/7 emergency heating repair", "Furnace and heat pump service", "Carbon monoxide safety checks", "Energy efficiency assessments"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
        </svg>
      ),
    },
    {
      title: `HVAC Installation in ${loc.city}`,
      desc: `Ready for a new HVAC system? We install high-efficiency heating and cooling systems for ${loc.city} homeowners. Free in-home estimates and flexible financing available.`,
      features: ["Free in-home estimates", "High-efficiency systems", "Flexible financing options", "10-year installation guarantee"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.112A2.25 2.25 0 014.5 10.014V8.25a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v1.764a2.25 2.25 0 01-1.536 2.044l-5.384 3.112a2.25 2.25 0 01-2.26 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 18v-6.75M17.25 18v-6.75"/>
        </svg>
      ),
    },
    {
      title: `AC & Heating Maintenance in ${loc.city}`,
      desc: `Preventive maintenance keeps your HVAC system running efficiently and extends its lifespan. Our ${loc.city} maintenance plans include seasonal tune-ups and priority emergency service.`,
      features: ["Spring and fall tune-ups", "Priority scheduling", "15% discount on repairs", "No overtime charges"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: `TryCool HVAC - ${loc.city}, ${loc.state}`,
    description: `Professional HVAC services in ${loc.city}, ${loc.state}. AC repair, heating repair, and installation.`,
    url: `https://trycoolhvac.com/locations/${loc.slug}`,
    telephone: "(202) 555-1234",
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: {
        "@type": "State",
        name: loc.state === "DC" ? "District of Columbia" : loc.state === "MD" ? "Maryland" : "Virginia",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-5 flex items-center space-x-2">
            <a href="/" className="hover:text-white transition">Home</a>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
            <a href="/locations" className="hover:text-white transition">Service Areas</a>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
            <span className="text-white font-medium">{loc.city}, {loc.state}</span>
          </nav>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-200">Same-day service available in {loc.city}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            HVAC Services in {loc.city}, {loc.state}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Professional heating and air conditioning repair, installation, and maintenance for homes and businesses in {loc.city} and {loc.county}. Upfront pricing. Same-day service. Satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition shadow-lg shadow-red-600/25 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Schedule Service in {loc.city}</span>
            </a>
            <a href="tel:2025551234" className="text-white font-bold text-xl hover:text-red-400 transition flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>(202) 555-1234</span>
            </a>
          </div>
        </div>
      </section>

      {/* Seasonal Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-blue-800">Summer Cooling in {loc.city}</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{seasonal.summer}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 12.75a6.75 6.75 0 003.362-7.536z"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-red-700">Winter Heating in {loc.city}</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{seasonal.winter}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl font-black text-navy-900">
              HVAC Services in {loc.city}, {loc.state}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TryCool */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Why Us</p>
            <h2 className="text-3xl font-black text-navy-900">
              Why {loc.city} Homeowners Choose TryCool
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: `Local ${loc.county} Experts`,
                desc: `Our technicians know ${loc.city} and ${loc.county} inside and out. We understand the local climate challenges and building codes specific to your area.`,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                ),
              },
              {
                title: "Fast Response Times",
                desc: `With technicians based near ${loc.city}, we offer same-day service for most repairs. Emergency heating and AC repair is available 24/7, including holidays.`,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
              },
              {
                title: "5-Star Rated Service",
                desc: `${loc.city} customers rate us 5/5 stars. We provide upfront pricing, quality workmanship, and a satisfaction guarantee on every job.`,
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Need HVAC service in {loc.city}?</h3>
            <p className="text-red-100">Call now or schedule online — same-day service available.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Schedule Service</span>
            </a>
            <a href="/quote" className="bg-red-700 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-red-800 transition border border-red-500 flex items-center space-x-2">
              <span>Get a Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      {nearby.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <h2 className="text-2xl font-black text-navy-900">Nearby Service Areas</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {nearby.map((n) => (
                <a
                  key={n.slug}
                  href={`/locations/${n.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-blue-800 hover:shadow-md transition group"
                >
                  <p className="font-semibold text-navy-900 text-sm group-hover:text-blue-800 transition">{n.city}</p>
                  <p className="text-gray-400 text-xs">{n.state}</p>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="/locations" className="text-blue-800 font-semibold hover:underline inline-flex items-center space-x-1">
                <span>View all {locations.length} service areas</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-2">
            HVAC: Heating &amp; Air Conditioning
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight max-w-2xl">
            Reliable service — upfront pricing, no surprises
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
            At TryCool HVAC, we provide expert residential and commercial heating and air conditioning services across the DC metro area. Our certified technicians are available when you need them most.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <div>
                <p className="font-bold text-xl">5/5</p>
                <p className="text-sm text-gray-300">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="bg-blue-800 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
          <span className="font-semibold text-lg">Save on your next HVAC service!</span>
          <a href="/contact" className="underline font-bold hover:text-gray-200 transition">Learn More</a>
        </div>
      </div>

      {/* Schedule Online Form */}
      <section className="max-w-5xl mx-auto -mt-0 px-6 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 bg-blue-800 text-white rounded font-semibold text-sm">Residential</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded font-semibold text-sm hover:bg-gray-200 transition">Commercial</button>
          </div>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Schedule Online</h2>
          <form className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name*</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="First & Last Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email*</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="email@domain.com" type="email" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number*</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="(202) 555-1234" type="tel" />
            </div>
            <div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 px-6 rounded font-semibold text-sm transition">
                Request A Call
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center text-navy-900 mb-10">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "TryCool was fantastic. They arrived same day and fixed our AC unit quickly. Very professional and fair pricing.", name: "Sarah M." },
              { text: "Our furnace stopped working on a cold night. TryCool had a technician out within 2 hours. Excellent service and communication.", name: "James R." },
              { text: "We had a full HVAC system installed. The team was knowledgeable, clean, and finished ahead of schedule. Highly recommend!", name: "Patricia L." },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 relative">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{review.text}</p>
                <p className="font-semibold text-navy-900">{review.name}</p>
                <div className="flex text-yellow-400 mt-1">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TryCool */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center text-navy-900 mb-4">The TryCool Advantage</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From tune-ups and maintenance to repairs and full system replacement, we provide services that keep your home or business at the perfect temperature.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Upfront Pricing",
                desc: "We quote by the job, not the hour, so you know the final price with no hidden fees.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
              },
              {
                title: "Done Right Promise",
                desc: "We guarantee quality work and will make it right if you are not 100% satisfied.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
              },
              {
                title: "Trained Technicians",
                desc: "Our team is expertly trained, background checked, and committed to respecting your home.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                  </svg>
                ),
              },
              {
                title: "24/7 Availability",
                desc: "We are here for you 7 days a week, 365 days a year — including holidays and emergencies.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-10">HVAC Services We Can Help With</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Air Conditioning Repair & Replacement", desc: "Expert AC repair and replacement services to ensure you stay cool and comfortable all summer long." },
              { title: "Heater Repair & Replacement", desc: "Fast, reliable heater repair and furnace replacement to keep your home warm through the winter." },
              { title: "HVAC Installation", desc: "Full system installation and upgrades to high-efficiency heating and cooling systems." },
              { title: "Maintenance & Tune-Ups", desc: "Regular maintenance plans to keep your system running efficiently and prevent costly breakdowns." },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-lg border-l-4 border-red-600 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-1">Ready for reliable HVAC service?</h3>
            <p className="text-red-100">Schedule your appointment today — satisfaction guaranteed.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span>Schedule Service</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "HVAC Services Washington DC | AC Repair & Heating | CoolHVAC",
  description: "Expert AC repair, heating repair, and HVAC installation in the DC metro area. 24/7 emergency service, same-day appointments, upfront pricing. Serving DC, Maryland & Northern Virginia. Call 202-455-0020.",
  openGraph: {
    title: "HVAC Services Washington DC | AC Repair & Heating | CoolHVAC",
    description: "Expert AC repair, heating repair, and HVAC installation in the DC metro area. 24/7 emergency service, same-day appointments, upfront pricing. Serving DC, Maryland & Northern Virginia. Call 202-455-0020.",
  },
  twitter: {
    title: "HVAC Services Washington DC | AC Repair & Heating | CoolHVAC",
    description: "Expert AC repair, heating repair, and HVAC installation in the DC metro area. 24/7 emergency service, same-day appointments, upfront pricing. Serving DC, Maryland & Northern Virginia. Call 202-455-0020.",
  },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="bg-white">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "HVACBusiness",
            "name": "CoolHVAC",
            "description": "Expert residential and commercial HVAC services across the DC metro area.",
            "url": "https://trycoolhvac.vercel.app",
            "telephone": "202-455-0020",
            "email": "service@trycoolhvac.com",
            "priceRange": "$$",
            "areaServed": [
              { "@type": "State", "name": "District of Columbia" },
              { "@type": "State", "name": "Maryland" },
              { "@type": "State", "name": "Virginia" }
            ],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trycoolhvac.vercel.app" }
            ]
          }
        ]
      }} />
      <Navbar />

      {/* Hero Section — split layout with technician photo */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        {/* Animated gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-blue-800/30 to-navy-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-200">Serving the DC Metro Area Since 2009</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-5 leading-[1.1] tracking-tight">
                Expert HVAC Service in DC —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">upfront pricing, no surprises</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
                Expert residential and commercial HVAC services across the DC metro area. Our certified technicians are available when you need them most.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold text-base transition shadow-lg shadow-red-600/25 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Schedule Service</span>
                </a>
                <a href="tel:2024550020" className="text-white font-bold text-xl hover:text-red-400 transition flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  <span>202-455-0020</span>
                </a>
              </div>

              {/* Trust signals row */}
              <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  <span className="text-sm text-gray-300"><span className="text-white font-bold">4.9/5</span> (500+ reviews)</span>
                </div>
                <div className="w-px h-5 bg-white/20 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span className="text-sm text-gray-300">Licensed & Insured</span>
                </div>
                <div className="w-px h-5 bg-white/20 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span className="text-sm text-gray-300">Same-Day Service</span>
                </div>
              </div>
            </div>

            {/* Right: Technician photo */}
            <div className="hidden md:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/hero-technician.jpg"
                  alt="CoolHVAC certified technician on the job"
                  width={800}
                  height={480}
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold text-sm">Background Checked</p>
                    <p className="text-gray-500 text-xs">All technicians verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "10,000+", label: "Homes Served" },
              { number: "24/7", label: "Emergency Service" },
              { number: "100%", label: "Satisfaction Guarantee" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-black">{stat.number}</p>
                <p className="text-sm text-blue-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Promo Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center space-x-2">
            <span className="bg-white text-red-600 text-xs font-black px-2 py-0.5 rounded uppercase tracking-wider">Spring Special</span>
            <span className="font-bold text-lg">AC Tune-Up — $79</span>
          </div>
          <span className="hidden sm:inline text-red-200">|</span>
          <span className="text-red-100 text-sm">Get your system ready for summer. Limited time offer.</span>
          <a href="/contact" className="bg-white text-red-600 font-bold text-sm px-5 py-2 rounded hover:bg-red-50 transition flex-shrink-0">
            Book Now
          </a>
        </div>
      </div>

      {/* Schedule Online Form */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div className="flex space-x-3 mb-6">
            <button className="px-5 py-2.5 bg-blue-800 text-white rounded-lg font-semibold text-sm shadow-sm">Residential</button>
            <button className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-lg font-semibold text-sm hover:bg-gray-200 transition">Commercial</button>
          </div>
          <h2 className="text-2xl font-bold text-navy-900 mb-2">Schedule Online</h2>
          <p className="text-gray-500 text-sm mb-6">Fill out the form below and we will contact you within 30 minutes.</p>
          <form className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name*</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="First & Last Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email*</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="email@domain.com" type="email" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number*</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="202-455-0020" type="tel" />
            </div>
            <div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 px-6 rounded-lg font-semibold text-sm transition shadow-sm">
                Request A Call
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="text-3xl font-black text-navy-900">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gray-200"></div>

            {[
              {
                step: "1",
                title: "Schedule a Call",
                desc: "Call us or fill out our online form. We will confirm your appointment within 30 minutes.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                ),
              },
              {
                step: "2",
                title: "We Diagnose",
                desc: "A certified technician arrives on time, inspects your system, and explains the issue clearly.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Problem Solved",
                desc: "We fix the issue right the first time — upfront pricing, no surprises, satisfaction guaranteed.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-800 border-2 border-gray-100 relative">
                    {item.icon}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-600 text-white rounded-full text-xs font-black flex items-center justify-center shadow">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews — enhanced with quotation marks and verified badges */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Trusted by Homeowners</p>
            <h2 className="text-3xl font-black text-navy-900">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "CoolHVAC was fantastic. They arrived same day and fixed our AC unit quickly. Very professional and fair pricing.", name: "Sarah M.", location: "Washington, DC", source: "Google", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80" },
              { text: "Our furnace stopped working on a cold night. CoolHVAC had a technician out within 2 hours. Excellent service and communication.", name: "James R.", location: "Bethesda, MD", source: "Yelp", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" },
              { text: "We had a full HVAC system installed. The team was knowledgeable, clean, and finished ahead of schedule. Highly recommend!", name: "Patricia L.", location: "Arlington, VA", source: "Google", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-7 relative hover:shadow-lg transition group">
                {/* Quote mark */}
                <div className="text-5xl text-blue-800/10 font-serif leading-none absolute top-4 right-6 select-none">&ldquo;</div>

                <div className="flex text-yellow-400 mb-4 text-sm">★★★★★</div>

                <p className="text-gray-700 text-sm leading-relaxed mb-5 relative z-10">&ldquo;{review.text}&rdquo;</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={80}
                      height={80}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
                      loading="lazy"
                      unoptimized
                    />
                    <div>
                      <p className="font-bold text-navy-900 text-sm">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.location}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                    {review.source} Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CoolHVAC */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl font-black text-navy-900 mb-4">The CoolHVAC Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From tune-ups and maintenance to repairs and full system replacement, we provide services that keep your home or business at the perfect temperature.
            </p>
          </div>
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
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-sm">
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

      {/* Meet the Team */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
                alt="CoolHVAC technician servicing an AC unit"
                width={500}
                height={224}
                className="rounded-2xl w-full h-56 object-cover"
                loading="lazy"
                unoptimized
              />
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80"
                alt="CoolHVAC technician at work"
                width={500}
                height={224}
                className="rounded-2xl w-full h-56 object-cover mt-6"
                loading="lazy"
                unoptimized
              />
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80"
                alt="Happy homeowner after HVAC service"
                width={500}
                height={224}
                className="rounded-2xl w-full h-56 object-cover"
                loading="lazy"
                unoptimized
              />
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80"
                alt="CoolHVAC service team"
                width={500}
                height={224}
                className="rounded-2xl w-full h-56 object-cover mt-6"
                loading="lazy"
                unoptimized
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Real People, Real Service</p>
              <h2 className="text-3xl font-black text-navy-900 mb-5">Technicians You Can Trust in Your Home</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every CoolHVAC technician is background-checked, NATE-certified, and trained to treat your home with care. We show up on time, explain everything clearly, and never pressure you into services you don&apos;t need.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Uniformed, photo-ID verified technicians",
                  "NATE-certified and EPA-licensed",
                  "Ongoing training on the latest systems",
                  "Respectful of your home — always clean up after the job",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold text-sm transition">
                <span>Meet Our Team</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">What We Do</p>
              <h2 className="text-3xl font-black text-navy-900">HVAC Services We Can Help With</h2>
            </div>
            <a href="/services" className="text-blue-800 font-semibold text-sm hover:underline mt-3 md:mt-0">
              View All Services &rarr;
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Air Conditioning Repair & Replacement", desc: "Expert AC repair and replacement services to ensure you stay cool and comfortable all summer long." },
              { title: "Heater Repair & Replacement", desc: "Fast, reliable heater repair and furnace replacement to keep your home warm through the winter." },
              { title: "HVAC Installation", desc: "Full system installation and upgrades to high-efficiency heating and cooling systems." },
              { title: "Maintenance & Tune-Ups", desc: "Regular maintenance plans to keep your system running efficiently and prevent costly breakdowns." },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-red-600 p-6 hover:shadow-md transition group">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600 transition">
                    <svg className="w-4 h-4 text-red-600 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-900 text-lg mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-red-600 transition flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 py-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Ready for reliable HVAC service?</h3>
            <p className="text-red-100">Schedule your appointment today — satisfaction guaranteed.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Schedule Service</span>
            </a>
            <a href="tel:2024550020" className="bg-red-700 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-red-800 transition flex items-center space-x-2 border border-red-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black mb-4">Request HVAC Service</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Fill out the form below and one of our HVAC specialists will contact you to schedule your service appointment.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Schedule Online</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name*</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name*</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="Last Name" />
                </div>
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
                <label className="block text-sm font-semibold text-gray-700 mb-1">ZIP/Postal Code*</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" placeholder="ZIP Code" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none text-gray-600">
                  <option>Select a service...</option>
                  <option>AC Repair</option>
                  <option>Heating Repair</option>
                  <option>HVAC Installation</option>
                  <option>Maintenance / Tune-Up</option>
                  <option>Indoor Air Quality</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Details</label>
                <textarea className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none" rows="4" placeholder="Tell us about the issue..."></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold text-sm transition">
                Request A Call
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-navy-900 text-white rounded-lg p-8 mb-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:2025551234" className="text-gray-300 hover:text-white">(202) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">service@trycoolhvac.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-300">24/7 Emergency Service</p>
                    <p className="text-gray-300">Mon-Fri: 8AM - 6PM</p>
                    <p className="text-gray-300">Sat: 9AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Our Service Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Every TryCool HVAC service comes with our Done Right Promise. If you are not 100% satisfied with our work, we will make it right — guaranteed.
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-sm text-gray-600 font-semibold">5/5 Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

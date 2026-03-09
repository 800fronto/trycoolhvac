
export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white text-xl font-black tracking-tight">TRY</span>
              <span className="text-red-500 text-xl font-black tracking-tight">COOL</span>
              <span className="text-white text-xl font-black tracking-tight ml-1">HVAC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reliable heating and air conditioning services across the Washington DC metro area. Licensed, insured, and committed to your comfort.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/services" className="hover:text-white transition">AC Repair</a></li>
              <li><a href="/services" className="hover:text-white transition">Heating Repair</a></li>
              <li><a href="/services" className="hover:text-white transition">HVAC Installation</a></li>
              <li><a href="/services" className="hover:text-white transition">Maintenance</a></li>
              <li><a href="/services" className="hover:text-white transition">Indoor Air Quality</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/locations" className="hover:text-white transition">Washington DC</a></li>
              <li><a href="/locations" className="hover:text-white transition">Bethesda, MD</a></li>
              <li><a href="/locations" className="hover:text-white transition">Arlington, VA</a></li>
              <li><a href="/locations" className="hover:text-white transition">Silver Spring, MD</a></li>
              <li><a href="/locations" className="hover:text-white transition">Alexandria, VA</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <a href="tel:2025551234" className="text-white font-bold text-lg hover:text-red-400 transition">(202) 555-1234</a>
              </p>
              <p>service@trycoolhvac.com</p>
              <p>24/7 Emergency Service</p>
              <a href="/contact" className="inline-block mt-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm font-semibold transition">
                Schedule Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TryCool HVAC. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Serving Washington DC, Maryland &amp; Northern Virginia
          </p>
        </div>
      </div>
    </footer>
  );
}

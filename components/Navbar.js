
"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-navy-900 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <span>Serving Washington DC, Maryland &amp; Northern Virginia</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/locations" className="hover:underline">Find Your Local TryCool</a>
          <a href="#" className="hover:underline">Reviews</a>
          <a href="#" className="hover:underline">Special Offers</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-blue-800 text-2xl font-black tracking-tight">TRY</span>
              <span className="text-red-600 text-2xl font-black tracking-tight">COOL</span>
              <span className="text-blue-800 text-2xl font-black tracking-tight ml-1">HVAC</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-navy-900">
            <a href="/services" className="hover:text-blue-800 py-2 border-b-2 border-transparent hover:border-red-600 transition">Services</a>
            <a href="/locations" className="hover:text-blue-800 py-2 border-b-2 border-transparent hover:border-red-600 transition">Service Areas</a>
            <a href="/contact" className="hover:text-blue-800 py-2 border-b-2 border-transparent hover:border-red-600 transition">Contact</a>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-semibold text-sm transition flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Schedule Service</span>
            </a>
            <a href="tel:2025551234" className="text-navy-900 font-black text-xl hover:text-blue-800 transition">
              (202) 555-1234
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-navy-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-3">
            <a href="/services" className="block text-navy-900 font-semibold py-2 border-b">Services</a>
            <a href="/locations" className="block text-navy-900 font-semibold py-2 border-b">Service Areas</a>
            <a href="/contact" className="block text-navy-900 font-semibold py-2 border-b">Contact</a>
            <a href="tel:2025551234" className="block text-red-600 font-bold text-lg py-2">(202) 555-1234</a>
            <a href="/contact" className="block bg-red-600 text-white text-center py-3 rounded font-semibold">Schedule Service</a>
          </div>
        )}
      </div>
    </header>
  );
}

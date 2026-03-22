
"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", zip: "", service: "", details: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-200">We respond within 30 minutes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Request HVAC Service</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Fill out the form below and one of our HVAC specialists will contact you to schedule your service appointment.
          </p>
        </div>
      </section>

      {/* Emergency Strip */}
      <div className="bg-red-600 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-bold">Need emergency service?</span>
          </div>
          <span className="text-red-100 text-sm">Skip the form — call us directly for immediate help.</span>
          <a href="tel:2024550020" className="bg-white text-red-600 font-bold text-sm px-5 py-2 rounded-lg hover:bg-red-50 transition flex-shrink-0">
            Call 202-455-0020
          </a>
        </div>
      </div>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-900">Schedule Online</h2>
                <p className="text-sm text-gray-500">We will get back to you within 30 minutes</p>
              </div>
            </div>
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Request Sent!</h3>
                <p className="text-gray-500 text-sm">We will get back to you within 30 minutes.</p>
              </div>
            ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name*</label>
                  <input required name="firstName" value={form.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name*</label>
                  <input required name="lastName" value={form.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email*</label>
                <input required name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition" placeholder="email@domain.com" type="email" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number*</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition" placeholder="202-455-0020" type="tel" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">ZIP/Postal Code*</label>
                <input required name="zip" value={form.zip} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition" placeholder="ZIP Code" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                <select name="service" value={form.service} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none text-gray-600 transition">
                  <option value="">Select a service...</option>
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
                <textarea name="details" value={form.details} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition" rows="4" placeholder="Tell us about the issue..."></textarea>
              </div>
              {status === "error" && <p className="text-red-600 text-sm text-center">Something went wrong. Please call us directly at 202-455-0020.</p>}
              <button type="submit" disabled={status === "sending"} className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white py-3.5 rounded-lg font-bold text-sm transition shadow-sm flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                </svg>
                <span>{status === "sending" ? "Sending..." : "Request A Call"}</span>
              </button>
              <p className="text-xs text-gray-400 text-center">By submitting this form, you agree to be contacted by CoolHVAC regarding your service request.</p>
            </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact card */}
            <div className="bg-navy-900 text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-400 mb-0.5">Phone</p>
                    <a href="tel:2024550020" className="text-white font-bold text-lg hover:text-red-400 transition">202-455-0020</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-400 mb-0.5">Email</p>
                    <p className="text-white font-bold">service@trycoolhvac.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-400 mb-0.5">Hours</p>
                    <p className="text-white font-bold">24/7 Emergency Service</p>
                    <p className="text-gray-300 text-sm">Mon-Fri: 8AM - 6PM</p>
                    <p className="text-gray-300 text-sm">Sat: 9AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Service Area</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Washington, DC", "Bethesda, MD", "Arlington, VA", "Silver Spring, MD", "Alexandria, VA", "Rockville, MD", "Falls Church, VA", "Fairfax, VA"].map((area, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <a href="/locations" className="inline-flex items-center space-x-1 text-blue-800 font-semibold text-sm mt-4 hover:underline">
                <span>View all service areas</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
              </a>
            </div>

            {/* Guarantee */}
            <div className="bg-blue-800 text-white rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Our Service Guarantee</h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-3">
                    Every CoolHVAC service comes with our Done Right Promise. If you are not 100% satisfied with our work, we will make it right — guaranteed.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                    <span className="text-sm text-blue-200 font-semibold">4.9/5 from 500+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | CoolHVAC",
  description: "CoolHVAC privacy policy. Learn how we collect, use, and protect your personal information when you use our HVAC services and website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Privacy Policy</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">How we collect, use, and protect your personal information.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm text-gray-400 mb-8">Last updated: March 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Information We Collect</h2>
            <p className="mb-3">When you use our website or request HVAC services, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact information:</strong> Name, email address, phone number, and mailing address</li>
              <li><strong>Service details:</strong> ZIP code, property type, and details about your HVAC needs</li>
              <li><strong>Form submissions:</strong> Information you provide through our contact forms, quote requests, and scheduling tools</li>
              <li><strong>Usage data:</strong> Browser type, IP address, pages visited, and time spent on our site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, schedule, and deliver HVAC services you request</li>
              <li>Respond to your inquiries and service requests</li>
              <li>Send appointment confirmations and service reminders</li>
              <li>Send promotional offers and seasonal maintenance reminders (with your consent)</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Cookies & Tracking Technologies</h2>
            <p className="mb-3">Our website uses cookies and similar technologies to enhance your browsing experience. These include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics)</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
            </ul>
            <p className="mt-3">You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Third-Party Services</h2>
            <p className="mb-3">We may share your information with trusted third parties who assist us in operating our business:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment processors:</strong> To securely process service payments</li>
              <li><strong>Scheduling software:</strong> To manage appointments and service dispatch</li>
              <li><strong>Email service providers:</strong> To send transactional and promotional communications</li>
              <li><strong>Analytics providers:</strong> To analyze website traffic and usage patterns</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us using the information below.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Contact Us</h2>
            <p className="mb-3">If you have questions about this privacy policy or how we handle your information, please contact us:</p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="font-bold text-navy-900">JMO HVAC Service Inc. (CoolHVAC)</p>
              <p className="mt-2">Email: <a href="mailto:service@trycoolhvac.com" className="text-blue-800 hover:underline">service@trycoolhvac.com</a></p>
              <p>Phone: <a href="tel:2024550020" className="text-blue-800 hover:underline">202-455-0020</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

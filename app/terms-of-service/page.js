import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service | CoolHVAC",
  description: "Terms of service for CoolHVAC HVAC services. Review our service agreement, pricing, warranties, and policies for heating and air conditioning services in the DC metro area.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Terms of Service</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">Please review the following terms that govern the use of our services and website.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm text-gray-400 mb-8">Last updated: March 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Service Agreement</h2>
            <p className="mb-3">By scheduling or receiving HVAC services from JMO HVAC Service Inc. (operating as CoolHVAC), you agree to the following terms and conditions. These terms apply to all residential and commercial HVAC services we provide, including repair, installation, maintenance, and emergency services.</p>
            <p>We reserve the right to refuse service at our discretion if conditions are deemed unsafe or if the scope of work falls outside our area of expertise.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Pricing & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All service pricing is provided upfront before work begins. You will receive a written estimate or quote for approval before any chargeable work is performed.</li>
              <li>Diagnostic and service fees are due upon completion of service unless other arrangements are made in advance.</li>
              <li>We accept major credit cards, checks, and financing options for qualifying installations.</li>
              <li>Prices are subject to change based on equipment availability, market conditions, and scope of work. Any changes will be communicated before proceeding.</li>
              <li>Outstanding balances beyond 30 days may be subject to late fees and collection actions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Warranties & Guarantees</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Labor warranty:</strong> All repair work is backed by a 90-day labor warranty from the date of service.</li>
              <li><strong>Installation warranty:</strong> New system installations include manufacturer warranties plus our own installation workmanship guarantee.</li>
              <li><strong>Satisfaction guarantee:</strong> If you are not satisfied with our service, contact us within 30 days and we will work to resolve the issue at no additional cost.</li>
              <li>Warranties do not cover damage caused by misuse, neglect, unauthorized modifications, or acts of nature.</li>
              <li>Warranty claims must be submitted by contacting our office directly.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Limitation of Liability</h2>
            <p className="mb-3">To the fullest extent permitted by law, JMO HVAC Service Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services, including but not limited to property damage, loss of use, or business interruption.</p>
            <p>Our total liability for any claim arising from services performed shall not exceed the amount paid for the specific service giving rise to the claim.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Scheduling & Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointments can be scheduled online, by phone, or through our contact form. We will confirm your appointment via phone or email.</li>
              <li>We request at least 24 hours notice for cancellations or rescheduling of non-emergency appointments.</li>
              <li>Repeated no-shows or late cancellations may result in a cancellation fee for future appointments.</li>
              <li>Emergency services are available 24/7 and may be subject to after-hours rates.</li>
              <li>Service windows are approximate. We will notify you if there are any significant delays.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Dispute Resolution</h2>
            <p className="mb-3">If you have a concern or dispute regarding our services, we encourage you to contact us directly first so we can resolve the issue promptly.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact our customer service team at <a href="tel:2024550020" className="text-blue-800 hover:underline">202-455-0020</a> or <a href="mailto:service@trycoolhvac.com" className="text-blue-800 hover:underline">service@trycoolhvac.com</a>.</li>
              <li>If a resolution cannot be reached through direct communication, disputes will be resolved through binding arbitration in accordance with the laws of the District of Columbia.</li>
              <li>Both parties waive the right to participate in class action lawsuits or class-wide arbitration.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Changes to Terms</h2>
            <p>We may update these terms from time to time to reflect changes in our services, business practices, or legal requirements. Updated terms will be posted on this page with a revised date. Your continued use of our services after changes are posted constitutes acceptance of the updated terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy-900 mb-4">Contact</h2>
            <p className="mb-3">For questions about these terms of service, contact us:</p>
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

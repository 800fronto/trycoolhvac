import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Customer Reviews | CoolHVAC | 4.9/5 from 500+ Reviews",
  description: "Read what our customers say about CoolHVAC. 4.9 out of 5 stars from over 500 verified reviews across DC, Maryland, and Northern Virginia.",
  alternates: { canonical: "/reviews" },
};

const reviews = [
  {
    name: "Sarah M.",
    location: "Arlington, VA",
    service: "AC Repair",
    rating: 5,
    text: "Our AC went out on the hottest day of the summer. CoolHVAC had a technician at our house within two hours. He diagnosed the issue quickly, explained everything clearly, and had it running again the same day. Incredible service.",
  },
  {
    name: "James T.",
    location: "Bethesda, MD",
    service: "Heating Installation",
    rating: 5,
    text: "We replaced our 20-year-old furnace with a new high-efficiency system. The team was professional from the initial quote through installation. They even cleaned up better than when they arrived. Very fair pricing too.",
  },
  {
    name: "Priya K.",
    location: "Washington, DC",
    service: "Maintenance Plan",
    rating: 5,
    text: "Been on their maintenance plan for three years now. They come out twice a year, tune everything up, and catch small issues before they become expensive problems. Peace of mind is worth every penny.",
  },
  {
    name: "Robert L.",
    location: "Silver Spring, MD",
    service: "AC Installation",
    rating: 5,
    text: "Got three quotes for a new central AC system. CoolHVAC was the most detailed in their assessment and competitively priced. The installation crew was on time, courteous, and finished in one day. Our energy bills dropped noticeably.",
  },
  {
    name: "Angela D.",
    location: "Alexandria, VA",
    service: "Emergency Heating Repair",
    rating: 5,
    text: "Our heat stopped working on a Friday night in January. Called CoolHVAC and they had someone out within an hour. The tech was knowledgeable and fixed the issue fast. Can not say enough good things.",
  },
  {
    name: "Marcus W.",
    location: "Rockville, MD",
    service: "Ductwork",
    rating: 5,
    text: "Had them replace old ductwork in our 1960s colonial. The difference in airflow and efficiency is remarkable. Every room actually gets to the temperature we set now. Should have done this years ago.",
  },
  {
    name: "Linda C.",
    location: "Fairfax, VA",
    service: "AC Repair",
    rating: 4,
    text: "Good service overall. The technician was professional and fixed our AC compressor issue. Scheduling was easy and the price was fair. Only minor note is the service window was a bit wide, but they did call ahead.",
  },
  {
    name: "David H.",
    location: "Capitol Hill, DC",
    service: "Heat Pump Installation",
    rating: 5,
    text: "Switched from oil heat to a heat pump system. CoolHVAC walked us through every option, helped us understand the rebates available, and completed the install with zero issues. Already saving on our utility bills.",
  },
  {
    name: "Karen P.",
    location: "Gaithersburg, MD",
    service: "Indoor Air Quality",
    rating: 5,
    text: "Had them install a whole-home air purification system. The technician took time to explain how it works and showed us the filter schedule. Our allergies have improved significantly since the installation.",
  },
  {
    name: "Thomas R.",
    location: "McLean, VA",
    service: "Commercial HVAC",
    rating: 5,
    text: "We use CoolHVAC for our office building. They handle quarterly maintenance and any repairs that come up. Response times are fast, pricing is transparent, and the building stays comfortable year-round. Highly recommend for commercial clients.",
  },
  {
    name: "Michelle S.",
    location: "Takoma Park, MD",
    service: "Heating Repair",
    rating: 5,
    text: "Furnace was making a terrible noise. The CoolHVAC tech identified a failing blower motor, had the part on his truck, and replaced it in under an hour. Fair price, no upselling, just honest work.",
  },
  {
    name: "Brian G.",
    location: "Reston, VA",
    service: "Full System Replacement",
    rating: 5,
    text: "Replaced both our AC and furnace. The project manager kept us informed every step of the way. The crew was respectful of our home and the new system runs whisper-quiet. Best home improvement investment we have made.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex space-x-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Customer Reviews</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">See what homeowners and businesses across the DC metro area say about our HVAC services.</p>
        </div>
      </section>

      {/* Aggregate Rating */}
      <section className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-black">4.9</p>
              <div className="flex justify-center mt-2 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-blue-200 text-sm mt-1 font-medium">out of 5 stars</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black">500+</p>
              <p className="text-blue-200 text-sm font-medium">Verified Reviews</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black">98%</p>
              <p className="text-blue-200 text-sm font-medium">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full">{review.service}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                <p className="font-bold text-navy-900 text-sm">{review.name}</p>
                <p className="text-gray-400 text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Join our 500+ satisfied customers</h3>
            <p className="text-red-100">Experience the CoolHVAC difference — schedule your service today.</p>
          </div>
          <a href="/contact" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center space-x-2">
            <span>Schedule Service</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


"use client";
import { useState } from "react";

const serviceTypes = [
  { id: "ac-repair", label: "AC Repair", baseMin: 150, baseMax: 500, icon: "sun" },
  { id: "heating-repair", label: "Heating / Furnace Repair", baseMin: 150, baseMax: 600, icon: "flame" },
  { id: "ac-install", label: "AC System Installation", baseMin: 3500, baseMax: 7500, icon: "sun" },
  { id: "heating-install", label: "Heating System Installation", baseMin: 3000, baseMax: 7000, icon: "flame" },
  { id: "full-hvac", label: "Full HVAC System Replacement", baseMin: 6000, baseMax: 15000, icon: "system" },
  { id: "maintenance", label: "Annual Maintenance Plan", baseMin: 150, baseMax: 350, icon: "wrench" },
  { id: "duct-work", label: "Ductwork Repair / Replacement", baseMin: 1500, baseMax: 5000, icon: "duct" },
  { id: "air-quality", label: "Indoor Air Quality Solutions", baseMin: 500, baseMax: 2500, icon: "air" },
];

const homeSizes = [
  { id: "small", label: "Under 1,000 sq ft", sublabel: "Studio / 1 bed", multiplier: 0.8 },
  { id: "medium", label: "1,000 – 2,000 sq ft", sublabel: "2-3 bedrooms", multiplier: 1.0 },
  { id: "large", label: "2,000 – 3,000 sq ft", sublabel: "3-4 bedrooms", multiplier: 1.25 },
  { id: "xlarge", label: "3,000+ sq ft", sublabel: "5+ bedrooms", multiplier: 1.5 },
];

const systemAges = [
  { id: "new", label: "Under 5 years", multiplier: 0.9, note: "Likely under warranty" },
  { id: "mid", label: "5 – 10 years", multiplier: 1.0, note: "Standard maintenance needed" },
  { id: "old", label: "10 – 15 years", multiplier: 1.15, note: "May need more extensive repair" },
  { id: "very-old", label: "15+ years", multiplier: 1.3, note: "Consider replacement" },
];

const efficiencyLevels = [
  { id: "standard", label: "Standard", sublabel: "Basic efficiency", multiplier: 1.0 },
  { id: "high", label: "ENERGY STAR", sublabel: "High efficiency", multiplier: 1.2 },
  { id: "premium", label: "Premium", sublabel: "Variable speed", multiplier: 1.45 },
];

const steps = [
  { num: 1, title: "Service Type" },
  { num: 2, title: "Home Size" },
  { num: 3, title: "System Age" },
  { num: 4, title: "Efficiency" },
  { num: 5, title: "Urgency" },
];

export default function QuoteCalculator() {
  const [service, setService] = useState("");
  const [homeSize, setHomeSize] = useState("");
  const [systemAge, setSystemAge] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [urgency, setUrgency] = useState("standard");
  const [result, setResult] = useState(null);

  const currentStep = !service ? 1 : !homeSize ? 2 : !systemAge ? 3 : !efficiency ? 4 : 5;

  const calculate = () => {
    const svc = serviceTypes.find((s) => s.id === service);
    const size = homeSizes.find((s) => s.id === homeSize);
    const age = systemAges.find((s) => s.id === systemAge);
    const eff = efficiencyLevels.find((e) => e.id === efficiency);

    if (!svc || !size || !age || !eff) return;

    const urgencyMultiplier = urgency === "emergency" ? 1.25 : urgency === "soon" ? 1.1 : 1.0;

    const min = Math.round(svc.baseMin * size.multiplier * age.multiplier * eff.multiplier * urgencyMultiplier);
    const max = Math.round(svc.baseMax * size.multiplier * age.multiplier * eff.multiplier * urgencyMultiplier);

    const isInstall = ["ac-install", "heating-install", "full-hvac"].includes(service);

    setResult({
      min,
      max,
      service: svc.label,
      ageNote: age.note,
      isInstall,
      monthlySavings: isInstall && efficiency !== "standard" ? Math.round((max - min) * 0.02) : null,
    });
  };

  const isComplete = service && homeSize && systemAge && efficiency;

  return (
    <div>
      {/* Step Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step.num < currentStep
                    ? "bg-green-500 text-white"
                    : step.num === currentStep
                    ? "bg-blue-800 text-white ring-4 ring-blue-100"
                    : "bg-gray-200 text-gray-400"
                }`}>
                  {step.num < currentStep ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  ) : step.num}
                </div>
                <span className={`text-xs mt-1 font-medium hidden sm:block ${
                  step.num <= currentStep ? "text-navy-900" : "text-gray-400"
                }`}>{step.title}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 mt-[-16px] sm:mt-0 ${
                  step.num < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Service Type */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-navy-900 mb-1">
          1. What service do you need?
        </label>
        <p className="text-xs text-gray-500 mb-3">Select the service that best matches your needs</p>
        <div className="grid grid-cols-2 gap-2">
          {serviceTypes.map((s) => (
            <button
              key={s.id}
              onClick={() => { setService(s.id); setResult(null); }}
              className={`text-left px-4 py-3.5 rounded-lg border-2 text-sm font-medium transition-all ${
                service === s.id
                  ? "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-800 hover:bg-blue-50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Home Size */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-navy-900 mb-1">
          2. What is your home size?
        </label>
        <p className="text-xs text-gray-500 mb-3">This helps us estimate equipment and labor requirements</p>
        <div className="grid grid-cols-2 gap-2">
          {homeSizes.map((s) => (
            <button
              key={s.id}
              onClick={() => { setHomeSize(s.id); setResult(null); }}
              className={`text-left px-4 py-3.5 rounded-lg border-2 text-sm transition-all ${
                homeSize === s.id
                  ? "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-800 hover:bg-blue-50"
              }`}
            >
              <span className="font-semibold block">{s.label}</span>
              <span className={`text-xs ${homeSize === s.id ? "text-blue-200" : "text-gray-400"}`}>{s.sublabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System Age */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-navy-900 mb-1">
          3. How old is your current system?
        </label>
        <p className="text-xs text-gray-500 mb-3">System age affects repair complexity and replacement recommendations</p>
        <div className="grid grid-cols-2 gap-2">
          {systemAges.map((s) => (
            <button
              key={s.id}
              onClick={() => { setSystemAge(s.id); setResult(null); }}
              className={`text-left px-4 py-3.5 rounded-lg border-2 text-sm transition-all ${
                systemAge === s.id
                  ? "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-800 hover:bg-blue-50"
              }`}
            >
              <span className="font-semibold">{s.label}</span>
              <span className={`block text-xs mt-0.5 ${systemAge === s.id ? "text-blue-200" : "text-gray-400"}`}>
                {s.note}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Efficiency */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-navy-900 mb-1">
          4. Preferred efficiency level?
        </label>
        <p className="text-xs text-gray-500 mb-3">Higher efficiency = lower monthly energy bills</p>
        <div className="grid grid-cols-3 gap-2">
          {efficiencyLevels.map((e) => (
            <button
              key={e.id}
              onClick={() => { setEfficiency(e.id); setResult(null); }}
              className={`text-center px-4 py-4 rounded-lg border-2 text-sm transition-all ${
                efficiency === e.id
                  ? "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-800 hover:bg-blue-50"
              }`}
            >
              <span className="font-semibold block">{e.label}</span>
              <span className={`text-xs ${efficiency === e.id ? "text-blue-200" : "text-gray-400"}`}>{e.sublabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Urgency */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-navy-900 mb-1">
          5. How soon do you need service?
        </label>
        <p className="text-xs text-gray-500 mb-3">Emergency service is available 24/7 at a premium rate</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "standard", label: "Flexible", sublabel: "Best price" },
            { id: "soon", label: "Within Days", sublabel: "+10% premium" },
            { id: "emergency", label: "Emergency", sublabel: "+25% premium" },
          ].map((u) => (
            <button
              key={u.id}
              onClick={() => { setUrgency(u.id); setResult(null); }}
              className={`text-center px-4 py-4 rounded-lg border-2 text-sm transition-all ${
                urgency === u.id
                  ? u.id === "emergency" ? "bg-red-600 text-white border-red-600 shadow-md" : "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-800 hover:bg-blue-50"
              }`}
            >
              <span className="font-semibold block">{u.label}</span>
              <span className={`text-xs ${
                urgency === u.id
                  ? u.id === "emergency" ? "text-red-200" : "text-blue-200"
                  : "text-gray-400"
              }`}>{u.sublabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculate}
        disabled={!isComplete}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
          isComplete
            ? "bg-red-600 hover:bg-red-700 text-white cursor-pointer shadow-lg shadow-red-600/25"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isComplete ? "Get Your Estimate" : `Complete all steps to get your estimate (${currentStep}/5)`}
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8 bg-gradient-to-br from-navy-900 to-blue-800 rounded-xl p-8 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <h3 className="text-lg font-semibold">Estimated Cost for {result.service}</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
            <p className="text-blue-200 text-sm mb-1">Estimated price range</p>
            <div className="text-4xl md:text-5xl font-black my-1">
              ${result.min.toLocaleString()} – ${result.max.toLocaleString()}
            </div>
            <p className="text-blue-200 text-sm">{result.ageNote}</p>
          </div>

          {result.monthlySavings && (
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 mb-4 flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
              </svg>
              <p className="text-sm">
                <span className="font-bold text-green-300">Energy Savings:</span>{" "}
                A high-efficiency system could save you up to ${result.monthlySavings}/month on energy bills.
              </p>
            </div>
          )}

          <div className="bg-white/10 rounded-lg p-4 mb-6 text-sm text-blue-100">
            <p className="font-semibold text-white mb-1">About this estimate</p>
            <p>This is a general estimate based on typical costs in the DC metro area. Your actual price may vary based on the specific equipment, complexity, and current promotions. We provide exact, upfront pricing before any work begins.</p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <a
              href="/contact"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3.5 rounded-lg font-bold transition shadow-lg shadow-red-600/25 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Schedule Free In-Home Estimate</span>
            </a>
            <a
              href="tel:2025551234"
              className="flex-1 bg-white text-navy-900 text-center py-3.5 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>Call (202) 555-1234</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

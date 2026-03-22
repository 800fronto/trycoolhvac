
"use client";
import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import locations from "../../data/locations";

function groupByRegion(locs) {
  const groups = {};
  locs.forEach((loc) => {
    if (!groups[loc.region]) groups[loc.region] = [];
    groups[loc.region].push(loc);
  });
  return groups;
}

const regionOrder = [
  "Washington DC",
  "Montgomery County",
  "Prince George's County",
  "Anne Arundel County",
  "Howard County",
  "Frederick County",
  "Northern Virginia",
  "Fairfax County",
  "Loudoun County",
  "Prince William County",
  "Stafford County",
  "Spotsylvania County",
  "Fauquier County",
  "Culpeper County",
  "Warren County",
  "Frederick County VA",
];

const stateFilters = [
  { id: "all", label: "All Areas", states: ["DC", "MD", "VA"] },
  { id: "dc", label: "Washington DC", states: ["DC"] },
  { id: "md", label: "Maryland", states: ["MD"] },
  { id: "va", label: "Virginia", states: ["VA"] },
];

export default function Locations() {
  const [stateFilter, setStateFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredLocations = useMemo(() => {
    const activeStates = stateFilters.find((f) => f.id === stateFilter)?.states || [];
    return locations.filter((loc) => {
      const matchesState = activeStates.includes(loc.state);
      const matchesSearch = !search || loc.city.toLowerCase().includes(search.toLowerCase()) || loc.zip.includes(search);
      return matchesState && matchesSearch;
    });
  }, [stateFilter, search]);

  const grouped = groupByRegion(filteredLocations);

  const stateCounts = useMemo(() => ({
    all: locations.length,
    dc: locations.filter((l) => l.state === "DC").length,
    md: locations.filter((l) => l.state === "MD").length,
    va: locations.filter((l) => l.state === "VA").length,
  }), []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-sm font-medium text-gray-200">Serving {locations.length}+ locations across the DMV</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">HVAC Service Areas</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            CoolHVAC proudly serves <strong className="text-white">{locations.length} locations</strong> across Washington DC, Maryland, and Northern Virginia. Find expert heating and AC services near you.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-black">{stateCounts.dc}</p>
              <p className="text-xs text-gray-300">DC Neighborhoods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-black">{stateCounts.md}</p>
              <p className="text-xs text-gray-300">Maryland Cities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-black">{stateCounts.va}</p>
              <p className="text-xs text-gray-300">Virginia Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by city name or ZIP code..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
              )}
            </div>

            {/* State Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1 flex-shrink-0">
              {stateFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setStateFilter(filter.id)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    stateFilter === filter.id
                      ? "bg-blue-800 text-white shadow-sm"
                      : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  {filter.label}
                  <span className={`ml-1.5 text-xs ${
                    stateFilter === filter.id ? "text-blue-200" : "text-gray-400"
                  }`}>
                    {stateCounts[filter.id]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          {search && (
            <p className="text-sm text-gray-500 mt-2">
              {filteredLocations.length} location{filteredLocations.length !== 1 ? "s" : ""} found
              {search && <span> for &ldquo;{search}&rdquo;</span>}
            </p>
          )}
        </div>
      </section>

      {/* Location Grid by Region */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {filteredLocations.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            <h3 className="text-lg font-bold text-navy-900 mb-2">No locations found</h3>
            <p className="text-gray-500 text-sm">Try a different search term or clear the filter.</p>
            <button onClick={() => { setSearch(""); setStateFilter("all"); }} className="mt-4 text-blue-800 font-semibold text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        ) : (
          regionOrder.map((region) => {
            const locs = grouped[region];
            if (!locs) return null;
            return (
              <div key={region} className="mb-10">
                <div className="flex items-center space-x-3 mb-4">
                  <h2 className="text-xl font-bold text-navy-900">
                    {region}
                  </h2>
                  <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-1 rounded-full">
                    {locs.length}
                  </span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {locs.map((loc) => (
                    <a
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="bg-white border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-blue-800 hover:bg-blue-50 hover:shadow-md transition group"
                    >
                      <p className="font-semibold text-navy-900 text-sm group-hover:text-blue-800 transition">{loc.city}</p>
                      <p className="text-gray-400 text-xs">{loc.state} {loc.zip}</p>
                    </a>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-black mb-1">Don&apos;t see your area?</h3>
            <p className="text-red-100">Call us — we may still be able to help.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:2025551234" className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition flex items-center space-x-2 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>(202) 555-1234</span>
            </a>
            <a href="/contact" className="bg-red-700 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-red-800 transition border border-red-500">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

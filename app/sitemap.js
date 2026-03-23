
import locations from "../data/locations";

const BASE_URL = "https://trycoolhvac.vercel.app";

export default function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/locations`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/quote`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/terms-of-service`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/reviews`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const locationPages = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages];
}

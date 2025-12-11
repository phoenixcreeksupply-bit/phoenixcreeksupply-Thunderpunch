// app/sitemap.js

const baseUrl = "https://phoenixcreeksupply.com";

/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const urls = [
    "/",                            // Home
    "/blog",                        // Blog index
    "/library",                     // Library

    // Library categories
    "/library/martial-arts-combatives",
    "/library/stoic-reflections",
    "/library/diy",

    // Promo pages
    "/promos/king-custom/active",
    "/promos/ravin/active",
  ];

  const now = new Date().toISOString();

  return urls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}

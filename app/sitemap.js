// app/sitemap.js
const baseUrl = "https://phoenixcreeksupply.com";

/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const staticPaths = [
    "/",                     // Home
    "/blog",
    "/library",
    "/library/martial-arts-combatives",
    "/library/stoic-reflections",
    "/library/diy",
    "/promos/king-custom/active",
    "/promos/ravin/active",
  ];

  const now = new Date();

  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

// app/sitemap.js
import fs from "fs";
import path from "path";

const baseUrl = "https://phoenixcreeksupply.com";

/**
 * Recursively discover all routes inside a directory.
 */
function getRoutesFromDir(dir, parentRoute = "") {
  const fullPath = path.join(process.cwd(), "app", dir);

  if (!fs.existsSync(fullPath)) return [];

  let routes = [];

  const items = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const item of items) {
    // ignore layout, page, metadata files
    if (
      item.name.startsWith("_") ||
      item.name.includes("layout") ||
      item.name.includes("template") ||
      item.name.includes("error") ||
      item.name.includes("not-found")
    ) {
      continue;
    }

    const itemPath = path.join(dir, item.name);
    const routePath = "/" + itemPath.replace(/\/page\.js$/, "");

    if (item.isDirectory()) {
      // recursively explore directory
      routes = routes.concat(getRoutesFromDir(itemPath, routePath));
    } else if (item.name === "page.js") {
      // route found
      routes.push(parentRoute || `/${dir}`);
    }
  }

  return [...new Set(routes)];
}

/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const now = new Date().toISOString();

  // 🔥 automatically discover routes in target sections
  const blogRoutes = getRoutesFromDir("blog");
  const libraryRoutes = getRoutesFromDir("library");
  const promoRoutes = getRoutesFromDir("promos");

  // 🔥 always include core pages
  const coreRoutes = ["/", "/blog", "/library"];

  const all = [...coreRoutes, ...blogRoutes, ...libraryRoutes, ...promoRoutes];

  // cleanup duplicates
  const unique = [...new Set(all)];

  return unique.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}


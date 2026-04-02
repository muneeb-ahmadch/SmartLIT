export const SITE_NAME = "Smart Lit";
export const SITE_URL = "https://smartlit.ae";
export const SITE_EMAIL = "sales@smartlit.me";
export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1664607069803-96e9d885050e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";

export type Schema = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebSiteSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-AE",
  };
}

export function buildOrganizationSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    areaServed: ["Abu Dhabi", "Dubai", "United Arab Emirates"],
  };
}

export function buildLocalBusinessSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    image: DEFAULT_OG_IMAGE,
    areaServed: [
      {
        "@type": "City",
        name: "Abu Dhabi",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
    serviceArea: ["Abu Dhabi", "Dubai", "United Arab Emirates"],
    knowsAbout: [
      "Luxury home automation",
      "Lighting control",
      "Motorized shading",
      "Climate control",
      "Home cinema design",
      "Multi-room audio",
      "Security integration",
    ],
  };
}

export function buildServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: `${input.name} | ${SITE_NAME}`,
    description: input.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: ["Abu Dhabi", "United Arab Emirates"],
    url: absoluteUrl(input.path),
  };
}

export function buildCollectionPageSchema(input: {
  name: string;
  description: string;
  path: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
  };
}

import {
  SITE_NAME,
  absoluteUrl,
  buildBreadcrumbSchema,
  type Schema,
} from "./site";

export const PRODUCT_PAGE_SECTION_ORDER = [
  "Hero",
  "Why This Product",
  "Design Applications",
  "Key Features",
  "Integration With Smart Lit",
  "FAQs",
  "Related Solutions",
  "Contact CTA",
] as const;

export type ProductPageInput = {
  brand: string;
  productName: string;
  category: string;
  path: string;
  description: string;
  image?: string;
  faq?: Array<{ question: string; answer: string }>;
};

export function buildProductPageMetadata(input: ProductPageInput) {
  return {
    title: `${input.brand} ${input.productName} in Abu Dhabi`,
    description: input.description,
    canonical: absoluteUrl(input.path),
    h1: `${input.brand} ${input.productName}`,
  };
}

export function buildProductPageSchema(input: ProductPageInput): Schema[] {
  const schemas: Schema[] = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${input.brand} ${input.productName}`,
      brand: {
        "@type": "Brand",
        name: input.brand,
      },
      category: input.category,
      description: input.description,
      url: absoluteUrl(input.path),
    },
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Brands & Tech", path: "/brands-technology" },
      { name: `${input.brand} ${input.productName}`, path: input.path },
    ]),
  ];

  if (input.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: input.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}

export function buildProductPageGuidance(input: ProductPageInput) {
  return {
    metadata: buildProductPageMetadata(input),
    sections: PRODUCT_PAGE_SECTION_ORDER,
    internalLinks: [
      "Link to the matching solution page with descriptive anchor text.",
      "Link to the brand overview page and relevant project pages.",
      "Link back to the contact page with a consultation CTA.",
    ],
    altTextRule:
      "Describe the visible design context or product finish naturally. Leave decorative imagery empty.",
    indexingRule:
      "Index only when the page has unique copy, usable specifications, original imagery or context, and at least one meaningful internal link.",
    brandVoice:
      "Write as a design-led integration partner, not as a catalogue reseller or manufacturer copy mirror.",
    pageTitleFormula: `${input.brand} ${input.productName} | ${SITE_NAME}`,
  };
}

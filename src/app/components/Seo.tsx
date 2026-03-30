import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  type Schema,
} from "../lib/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  schema?: Schema[];
};

function setMeta(
  selector: { name?: string; property?: string },
  content: string | undefined,
) {
  if (!content) return;

  const attr = selector.name ? "name" : "property";
  const value = selector.name ?? selector.property;

  if (!value) return;

  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${value}"]`,
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, value);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  schema = [],
}: SeoProps) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    document.documentElement.lang = "en-AE";

    setMeta({ name: "description" }, description);
    setMeta({ name: "robots" }, noindex ? "noindex, nofollow" : "index, follow");
    setMeta({ property: "og:type" }, "website");
    setMeta({ property: "og:site_name" }, SITE_NAME);
    setMeta({ property: "og:title" }, fullTitle);
    setMeta({ property: "og:description" }, description);
    setMeta({ property: "og:url" }, canonical);
    setMeta({ property: "og:image" }, image);
    setMeta({ name: "twitter:card" }, "summary_large_image");
    setMeta({ name: "twitter:title" }, fullTitle);
    setMeta({ name: "twitter:description" }, description);
    setMeta({ name: "twitter:image" }, image);
    setLink("canonical", canonical);

    const scriptIds = schema.map((_, index) => `smartlit-schema-${index}`);

    schema.forEach((entry, index) => {
      let script = document.getElementById(
        scriptIds[index],
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = scriptIds[index];
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(entry);
    });

    return () => {
      scriptIds.forEach((id) => {
        document.getElementById(id)?.remove();
      });
    };
  }, [description, image, noindex, path, schema, title]);

  return null;
}

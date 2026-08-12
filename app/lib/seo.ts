const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

export const SITE_URL = configuredSiteUrl
  ? new URL(
      configuredSiteUrl.startsWith("http")
        ? configuredSiteUrl
        : `https://${configuredSiteUrl}`,
    ).origin
  : "http://localhost:3000";

export const SITE_NAME = "Flora Eventos Florales";

export const DEFAULT_DESCRIPTION =
  "Decoración floral para eventos, centros de mesa, souvenirs y detalles personalizados para comuniones, bautismos, quince años y celebraciones especiales.";

export const SEO_KEYWORDS = [
  "decoración floral para eventos",
  "centros de mesa personalizados",
  "souvenirs para eventos",
  "arreglos florales",
  "decoración para comuniones",
  "decoración para bautismos",
  "decoración para quince años",
  "velas personalizadas",
  "cuadros de firmas",
];


import { SOCIAL_LINKS } from "../../constants/content";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "../../lib/seo";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-AR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/Logo.svg`,
        description: DEFAULT_DESCRIPTION,
        telephone: "+5491138175039",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+5491138175039",
          contactType: "customer service",
          availableLanguage: "Spanish",
          url: SOCIAL_LINKS.whatsapp,
        },
        makesOffer: [
          "Centros de mesa personalizados",
          "Souvenirs para eventos",
          "Decoración para eventos",
          "Decoración floral",
          "Diseños personalizados",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}


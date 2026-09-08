const SITE_URL = typeof window !== 'undefined' ? window.location.origin : "https://alking.com";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "مصنع الكينج",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-main.jpg`,
  description: "مصنع الكينج متجر متخصص في تقديم أجود خامات الليجن والكولون البناتي",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Arabic",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "مصنع الكينج",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/products?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "المنتجات", item: `${SITE_URL}/products` },
    { "@type": "ListItem", position: 3, name: "المقالات", item: `${SITE_URL}/articles` },
  ],
};

const orgJsonLd = JSON.stringify(orgSchema);
const webJsonLd = JSON.stringify(webSiteSchema);
const breadcrumbJsonLd = JSON.stringify(breadcrumbSchema);

const SchemaMarkup = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
};

export default SchemaMarkup;


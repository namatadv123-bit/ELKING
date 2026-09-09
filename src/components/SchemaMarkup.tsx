const SITE_URL = typeof window !== 'undefined' ? window.location.origin : "https://elkingclo.com";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ãÕäÚ ÇáßíäÌ",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo.webp`,
  description: "ãÕäÚ ÇáßíäÌ - áíÌä ÈäÇÊí ÌãáÉ¡ ßæáæä ÈäÇÊí ÌãáÉ¡ ãáÇÈÓ ÃØÝÇá ÈÇáÌãáÉ. ÃÌæÏ ÎÇãÇÊ ÇáÞØä ÇáãÕÑí¡ ãÞÇÓÇÊ 2-16.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201006395252",
    contactType: "customer service",
    availableLanguage: "Arabic",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ãÕäÚ ÇáßíäÌ",
  description: "ãÕäÚ ÇáßíäÌ - áíÌä ÈäÇÊí ÌãáÉ¡ ßæáæä ÈäÇÊí ÌãáÉ¡ ãáÇÈÓ ÃØÝÇá ÈÇáÌãáÉ. ÃÌæÏ ÎÇãÇÊ ÇáÞØä ÇáãÕÑí.",
  url: SITE_URL,
  telephone: "+201006395252",
  email: "contact@elkingclo.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EG",
    addressLocality: "ãÕÑ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  },
  priceRange: "$$",
  image: `${SITE_URL}/logo/logo.webp`,
  sameAs: [],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "áíÌä ÈäÇÊí ÌãáÉ - ßæáæä ÈäÇÊí - ãáÇÈÓ ÃØÝÇá ÈÇáÌãáÉ",
  description: "ÊÔßíáÉ ãÕäÚ ÇáßíäÌ ãä ÇááíÌä æÇáßæáæä ÇáÈäÇÊí æãáÇÈÓ ÇáÃØÝÇá ÈÇáÌãáÉ",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "áíÌä ÞØä ÈäÇÊí ãÖáÚ",
        description: "áíÌä ÞØäí ãÖáÚ ÚÇáí ÇáÌæÏÉ áÑÇÍÉ íæãíÉ áØÝáÊß. ãÕäæÚ ãä ÃÌæÏ ÃäæÇÚ ÇáÞØä ÇáãÕÑí.",
        image: `${SITE_URL}/images/product-3.webp`,
        brand: { "@type": "Brand", name: "ãÕäÚ ÇáßíäÌ" },
        offers: {
          "@type": "Offer",
          priceCurrency: "EGP",
          price: "150",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "ßæáæä ÃÈíÖ ãÏÑÓí",
        description: "ßæáæä ÃÈíÖ ããÊÇÒ ãäÇÓÈ ááãÏÑÓÉ. ãÕäæÚ ãä ÞØä ãÕÑí ÝÇÎÑ.",
        image: `${SITE_URL}/images/product-6.webp`,
        brand: { "@type": "Brand", name: "ãÕäÚ ÇáßíäÌ" },
        offers: {
          "@type": "Offer",
          priceCurrency: "EGP",
          price: "85",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ãÕäÚ ÇáßíäÌ | áíÌä ÈäÇÊí ÌãáÉ - ßæáæä ÈäÇÊí - ãáÇÈÓ ÃØÝÇá ÈÇáÌãáÉ",
  url: SITE_URL,
  description: "ãÕäÚ ÇáßíäÌ - áíÌä ÈäÇÊí ÌãáÉ¡ ßæáæä ÈäÇÊí ÌãáÉ¡ ãáÇÈÓ ÃØÝÇá ÈÇáÌãáÉ. ÃÌæÏ ÎÇãÇÊ ÇáÞØä ÇáãÕÑí.",
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
    { "@type": "ListItem", position: 1, name: "ÇáÑÆíÓíÉ", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "ÇáãäÊÌÇÊ", item: `${SITE_URL}/products` },
    { "@type": "ListItem", position: 3, name: "ÇáãÞÇáÇÊ", item: `${SITE_URL}/articles` },
  ],
};

const orgJsonLd = JSON.stringify(orgSchema);
const localJsonLd = JSON.stringify(localBusinessSchema);
const productJsonLd = JSON.stringify(productSchema);
const webJsonLd = JSON.stringify(webSiteSchema);
const breadcrumbJsonLd = JSON.stringify(breadcrumbSchema);

const SchemaMarkup = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: productJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
    </>
  );
};

export default SchemaMarkup;


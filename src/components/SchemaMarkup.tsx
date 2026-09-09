const SITE_URL = typeof window !== 'undefined' ? window.location.origin : "https://elkingclo.com";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "مصنع الكينج",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo.jpg`,
  description: "مصنع الكينج - ليجن بناتي جملة، كولون بناتي جملة، ملابس أطفال بالجملة. أجود خامات القطن المصري، مقاسات 2-16.",
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
  name: "مصنع الكينج",
  description: "مصنع الكينج - ليجن بناتي جملة، كولون بناتي جملة، ملابس أطفال بالجملة. أجود خامات القطن المصري.",
  url: SITE_URL,
  telephone: "+201006395252",
  email: "contact@elkingclo.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EG",
    addressLocality: "مصر",
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
  image: `${SITE_URL}/logo/logo.jpg`,
  sameAs: [],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ليجن بناتي جملة - كولون بناتي - ملابس أطفال بالجملة",
  description: "تشكيلة مصنع الكينج من الليجن والكولون البناتي وملابس الأطفال بالجملة",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "ليجن قطن بناتي مضلع",
        description: "ليجن قطني مضلع عالي الجودة لراحة يومية لطفلتك. مصنوع من أجود أنواع القطن المصري.",
        image: `${SITE_URL}/images/product-3.jpg`,
        brand: { "@type": "Brand", name: "مصنع الكينج" },
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
        name: "كولون أبيض مدرسي",
        description: "كولون أبيض ممتاز مناسب للمدرسة. مصنوع من قطن مصري فاخر.",
        image: `${SITE_URL}/images/product-6.jpg`,
        brand: { "@type": "Brand", name: "مصنع الكينج" },
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
  name: "مصنع الكينج | ليجن بناتي جملة - كولون بناتي - ملابس أطفال بالجملة",
  url: SITE_URL,
  description: "مصنع الكينج - ليجن بناتي جملة، كولون بناتي جملة، ملابس أطفال بالجملة. أجود خامات القطن المصري.",
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


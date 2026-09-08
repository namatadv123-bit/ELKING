const SchemaMarkup = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "مصنع الكينج",
    url: typeof window !== 'undefined' ? window.location.origin : "https://alking.com",
    logo: "https://alking.com/logo-main.jpg",
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
    url: typeof window !== 'undefined' ? window.location.origin : "https://alking.com",
    potentialAction: {
      "@type": "SearchAction",
      target: `${typeof window !== 'undefined' ? window.location.origin : "https://alking.com"}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://ahmedalmasi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المنتجات",
        "item": "https://ahmedalmasi.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "المقالات",
        "item": "https://ahmedalmasi.com/articles"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;


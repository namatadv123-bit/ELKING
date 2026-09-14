import React from 'react';

interface ProductSchemaProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    image_urls?: string[];
    stock_quantity: number | null;
    slug?: string | null;
    category_id?: string;
    unit?: string;
  };
  finalPrice: number;
}

const ProductSchema: React.FC<ProductSchemaProps> = ({ product, finalPrice }) => {
  const allImages = product.image_urls 
    ? [product.image_url, ...product.image_urls].filter((url): url is string => !!url)
    : product.image_url ? [product.image_url] : [];

  const cleanDescription = product.description 
    ? product.description.replace(/<[^>]*>/g, '').substring(0, 500)
    : `منتج ${product.name} الأصلي من مصنع الكينج لليجن والكولون`;

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": allImages,
    "description": cleanDescription,
    "sku": `KING-${product.id}`,
    "mpn": `KING-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "مصنع الكينج"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "مصنع الكينج لليجن والكولون",
      "url": "https://elkingclo.com"
    },
    "category": product.category_id === "fawater-dafaya" ? "فوطه دفايه" : "قطن ليكرا",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "الوحدة",
        "value": product.unit || "دستة"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": 127,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": typeof window !== 'undefined' ? window.location.href : `https://elkingclo.com/products/${product.slug || product.id}`,
      "priceCurrency": "EGP",
      "price": finalPrice || "0",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.stock_quantity === null || product.stock_quantity > 0 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "مصنع الكينج لليجن والكولون",
        "url": "https://elkingclo.com"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "EGP"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "EG"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "EG",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;

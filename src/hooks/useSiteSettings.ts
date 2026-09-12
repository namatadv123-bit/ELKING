export interface SiteFeatureItem {
  bold: string;
  text: string;
}

export interface SiteStatItem {
  icon: string;
  value: string;
  label: string;
}

export interface SiteSettings {
  site_name?: string;
  site_description?: string;
  logo_url?: string;
  favicon_url?: string;
  email?: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  address?: string;
  google_site_verification?: string;
  hero_image?: string;
  about_image?: string;
  features_image?: string;
  footer_image?: string;
  header_scripts?: string;
  footer_scripts?: string;
  features_title?: string;
  features_bottom_text?: string;
  features_list?: SiteFeatureItem[];
  home_stats?: SiteStatItem[];
}

export const staticSettings: SiteSettings = {
  site_name: "مصنع الكينج",
  site_description: "مصنع الكينج - ليجن بناتي جملة، كولون بناتي جملة، ملابس أطفال بالجملة. أجود خامات القطن المصري.",
  logo_url: "/logo/logo.webp",
  favicon_url: "/logo/logo.webp",
  whatsapp: "01006395252",
  facebook: "https://www.facebook.com/profile.php?id=61594011362740",
  instagram: "https://www.instagram.com/elking_121?stkn=cndtbXk4dTJrYnBn",
  tiktok: "",
  email: "info@elkingclo.com",
  address: "القاهرة، مصر",
  hero_image: "/1ab01d34-6c68-4b48-9a19-a5cea34c11cb.webp",
  about_image: "",
  features_image: "/images/product-18.webp",
  footer_image: "",
  features_title: "لماذا تختار مصنع الكينج؟",
  features_bottom_text: "نسعى دائماً لتقديم الأفضل لعملائنا.",
  features_list: [
    { bold: "جودة عالية", text: "نستخدم أفضل خامات القطن المصري" },
    { bold: "أسعار تنافسية", text: "نقدم أفضل أسعار الجملة في السوق" },
    { bold: "تنوع الموديلات", text: "تشكيلة واسعة من المقاسات والألوان" }
  ],
  home_stats: [
    { icon: "Users", value: "1000+", label: "عميل سعيد" },
    { icon: "Star", value: "500+", label: "تقييم إيجابي" },
    { icon: "ShoppingBag", value: "50+", label: "منتج مميز" }
  ]
};

export const useSiteSettings = () => {
  return {
    data: staticSettings,
    isLoading: false,
    error: null
  };
};


export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_url: string;
  image_urls?: string[];
  is_active: boolean;
  is_featured: boolean;
  slug: string;
  unit: string;
  stock_quantity: number;
  discount_percentage?: number;
  categories?: { name: string; slug: string; };
}

export const staticProducts: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `موديل مصنع الكينج رقم ${i + 1}`,
  description: "<p>أجود أنواع القطن المصري، ملمس ناعم ومريح جداً للأطفال.</p>",
  price: 100, // السعر الافتراضي (يرجى التعديل)
  category_id: i % 2 === 0 ? "leggings" : "tights",
  image_url: `/images/product-${i + 1}.webp`,
  is_active: true,
  is_featured: i < 4,
  slug: `product-${i + 1}`,
  unit: "قطعة",
  stock_quantity: 100,
  categories: i % 2 === 0 ? { name: "ليجن بناتي", slug: "leggings" } : { name: "كولون بناتي", slug: "tights" }
}));

export const staticCategories = [
  { id: "leggings", name: "ليجن بناتي", image_url: "/images/product-3.webp", slug: "leggings", icon: "👗" },
  { id: "tights", name: "كولون بناتي", image_url: "/images/product-6.webp", slug: "tights", icon: "👕" },
  { id: "basics", name: "بيزك", image_url: "/images/product-5.webp", slug: "basics", icon: "✨" }
];

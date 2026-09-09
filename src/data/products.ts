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

export const staticProducts: Product[] = [
  {
    id: "1",
    name: "ليجن قطن بناتي مضلع",
    description: "<p>ليجن قطني مضلع عالي الجودة لراحة يومية لطفلتك. مصنوع من أجود أنواع القطن المصري، مطاط ممتاز، ملمس ناعم يحمي البشرة. مناسب للخروج والمدرسة والعب.</p>",
    price: 150,
    category_id: "leggings",
    image_url: "/images/product-3.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-قطن-بناتي-مضلع",
    unit: "قطعة",
    stock_quantity: 50,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "2",
    name: "كولون أبيض مدرسي",
    description: "<p>كولون أبيض ممتاز مناسب للمدرسة. قطن مصري فاخر، مرونة عالية، مقاوم للغسيل. مثالي لكل يوم مدرسة.</p>",
    price: 85,
    category_id: "tights",
    image_url: "/images/product-6.webp",
    is_active: true,
    is_featured: false,
    slug: "كولون-أبيض-مدرسي",
    unit: "قطعة",
    stock_quantity: 100,
    categories: { name: "كولون بناتي", slug: "tights" }
  }
];

export const staticCategories = [
  { id: "leggings", name: "ليجن بناتي", image_url: "/images/product-3.webp" },
  { id: "tights", name: "كولون بناتي", image_url: "/images/product-6.webp" },
  { id: "basics", name: "بيزك", image_url: "/images/product-5.webp" }
];

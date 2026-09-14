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
    name: "دبدوب فوطه دفايه",
    description: "<p>فوطه دفايه مطبوعة بتصميم دبدوب جذاب. خامة ناعمة ومريحة، دافئة و user-friendly. مناسبة للاستخدام اليومي في المنزل أو السفر.</p><ul><li>خامة ناعمة ودافئة</li><li>تصميم دبدوب مميز</li><li>مقاومة للبثور</li><li>سهلة الغسل والتنظيف</li></ul>",
    price: 0,
    category_id: "fawater-dafaya",
    image_url: "/images/dadadub-fawater-dafaya.webp",
    is_active: true,
    is_featured: true,
    slug: "دبدوب-فوطه-دفايه",
    unit: "دستة",
    stock_quantity: 100,
    categories: { name: "فوطه دفايه", slug: "fawater-dafaya" }
  },
  {
    id: "2",
    name: "ساده فوطه دفايه",
    description: "<p>فوطه دفايه ساده بألوان متعددة. خامة قطنية عالية الجودة، ناعمة ومريحة. مناسبة للاستخدام اليومي والخروجات.</p><ul><li>خامة قطنية 100%</li><li>ألوان متعددة وثابتة</li><li>ناعمة ومريحة</li><li>مناسبة لجميع الأعمار</li></ul>",
    price: 0,
    category_id: "fawater-dafaya",
    image_url: "/images/sade-fawater-dafaya.webp",
    is_active: true,
    is_featured: false,
    slug: "ساده-فوطه-دفايه",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "فوطه دفايه", slug: "fawater-dafaya" }
  },
  {
    id: "3",
    name: "فيونكه فوطه دفايه",
    description: "<p>فوطه دفايه مزينة بفيونكات أنيقة. تصميم فاخر يجمع بين الجمال والراحة. مناسبة للهدايا والاستخدام اليومي.</p><ul><li>تصميم فيونكات أنيق</li><li>خامة فاخرة</li><li>مناسبة للهدايا</li><li>دافئة ومريحة</li></ul>",
    price: 0,
    category_id: "fawater-dafaya",
    image_url: "/images/fawonka-fawater-dafaya.webp",
    is_active: true,
    is_featured: true,
    slug: "فيونكه-فوطه-دفايه",
    unit: "دستة",
    stock_quantity: 80,
    categories: { name: "فوطه دفايه", slug: "fawater-dafaya" }
  },
  {
    id: "4",
    name: "منقوش فوطه دفايه",
    description: "<p>فوطه دفايه بنقوشات أنيقة متعددة. تصميم عصري يناسب ديكور المنزل الحديث. خامة عالية الجودة تدوم طويلاً.</p><ul><li>نقوشات أنيقة ومتعددة</li><li>تصميم عصري</li><li>خامة عالية الجودة</li><li>مناسبة للاستخدام اليومي</li></ul>",
    price: 0,
    category_id: "fawater-dafaya",
    image_url: "/images/manqosh-fawater-dafaya-1.webp",
    image_urls: [
      "/images/manqosh-fawater-dafaya-2.webp",
      "/images/manqosh-fawater-dafaya-3.webp"
    ],
    is_active: true,
    is_featured: true,
    slug: "منقوش-فوطه-دفايه",
    unit: "دستة",
    stock_quantity: 120,
    categories: { name: "فوطه دفايه", slug: "fawater-dafaya" }
  },
  {
    id: "5",
    name: "دبدوب قطن ليكرا",
    description: "<p>قطن ليكرا مطبوع بتصميم دبدوب مميز. خامة مريحة ومرنة، تناسب الحركة اليومية. مناسب لجميع الأعمار.</p><ul><li>خامة قطن ليكرا مريحة</li><li>تصميم دبدوب جذاب</li><li>مرنة ومريحة</li><li>مناسبة لجميع الأعمار</li></ul>",
    price: 0,
    category_id: "qotn-lycra",
    image_url: "/images/dadadub-qotn-lycra.webp",
    is_active: true,
    is_featured: true,
    slug: "دبدوب-قطن-ليكرا",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "قطن ليكرا", slug: "qotn-lycra" }
  },
  {
    id: "6",
    name: "ساده قطن ليكرا",
    description: "<p>قطن ليكرا ساده بألوان متعددة. خامة مريحة وناعمة، تناسب جميع المناسبات. مثالي للاستخدام اليومي.</p><ul><li>خامة قطن ليكرا 100%</li><li>ألوان متعددة وثابتة</li><li>ناعمة ومريحة</li><li>مناسبة لجميع الأعمار</li></ul>",
    price: 0,
    category_id: "qotn-lycra",
    image_url: "/images/sade-qotn-lycra.webp",
    is_active: true,
    is_featured: false,
    slug: "ساده-قطن-ليكرا",
    unit: "دستة",
    stock_quantity: 250,
    categories: { name: "قطن ليكرا", slug: "qotn-lycra" }
  },
  {
    id: "7",
    name: "فيونكه قطن ليكرا",
    description: "<p>قطن ليكرا مزين بفيونكات أنيقة. تصميم فاخر يجمع بين الجمال والراحة. مناسب للخروجات والمناسبات.</p><ul><li>تصميم فيونكات أنيق</li><li>خامة فاخرة</li><li>مناسبة للخروجات</li><li>مريحة وناعمة</li></ul>",
    price: 0,
    category_id: "qotn-lycra",
    image_url: "/images/fawonka-qotn-lycra.webp",
    is_active: true,
    is_featured: true,
    slug: "فيونكه-قطن-ليكرا",
    unit: "دستة",
    stock_quantity: 180,
    categories: { name: "قطن ليكرا", slug: "qotn-lycra" }
  },
  {
    id: "8",
    name: "مطبوع قطن ليكرا",
    description: "<p>قطن ليكرا بطبعات مميزة ومتعددة. 7 تصاميم مختلفة تناسب جميع الأذواق. خامة مريحة ومرنة للحركة اليومية.</p><ul><li>7 تصاميم مختلفة</li><li>خامة قطن ليكرا مريحة</li><li>طبعات مميزة وعصرية</li><li>مناسبة لجميع الأعمار</li></ul>",
    price: 0,
    category_id: "qotn-lycra",
    image_url: "/images/matbou-qotn-lycra-1.webp",
    image_urls: [
      "/images/matbou-qotn-lycra-2.webp",
      "/images/matbou-qotn-lycra-3.webp",
      "/images/matbou-qotn-lycra-4.webp",
      "/images/matbou-qotn-lycra-5.webp",
      "/images/matbou-qotn-lycra-6.webp",
      "/images/matbou-qotn-lycra-7.webp"
    ],
    is_active: true,
    is_featured: true,
    slug: "مطبوع-قطن-ليكرا",
    unit: "دستة",
    stock_quantity: 300,
    categories: { name: "قطن ليكرا", slug: "qotn-lycra" }
  },
  {
    id: "9",
    name: "منقوش قطن ليكرا",
    description: "<p>قطن ليكرا بنقوشات أنيقة ومتعددة. 3 تصاميم مختلفة تناسب جميع الأذواق. خامة مريحة وناعمة.</p><ul><li>3 تصاميم مختلفة</li><li>نقوشات أنيقة</li><li>خامة مريحة</li><li>مناسبة لجميع الأعمار</li></ul>",
    price: 0,
    category_id: "qotn-lycra",
    image_url: "/images/manqosh-qotn-lycra-1.webp",
    image_urls: [
      "/images/manqosh-qotn-lycra-2.webp",
      "/images/manqosh-qotn-lycra-3.webp"
    ],
    is_active: true,
    is_featured: false,
    slug: "منقوش-قطن-ليكرا",
    unit: "دستة",
    stock_quantity: 170,
    categories: { name: "قطن ليكرا", slug: "qotn-lycra" }
  },
];

export const staticCategories = [
  { id: "fawater-dafaya", name: "فوطه دفايه", image_url: "/images/dadadub-fawater-dafaya.webp", slug: "fawater-dafaya", icon: "🧸" },
  { id: "qotn-lycra", name: "قطن ليكرا", image_url: "/images/dadadub-qotn-lycra.webp", slug: "qotn-lycra", icon: "👕" }
];

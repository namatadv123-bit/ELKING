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
    name: "ليجن فيونكات بناتي - ملون",
    description: "<p>ليجن بناتي مضلع بطباعة فيونكات مميزة. متوفر بعدة ألوان: وردي، رمادي، بيج، أسود. طبعة مميزة، مريح في الحركة، أبок الخامة.</p><ul><li>خامات قطن مصري عالي الجودة</li><li>مضلع مريح</li><li>ألوان ثابتة لا تتأثر بالغسيل</li></ul>",
    price: 95,
    category_id: "leggings",
    image_url: "/images/product-1.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-فيونكات-بناتي-ملون",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "2",
    name: "كولون مخملي مضلع - أبيض",
    description: "<p>كولون مخملي مضلع مريح للبنات. خامة Lycoprene فاخرة، يعطي مظهر أنيق مع فستان أو توب. ناعم على البشرة ومريح في الحركة.</p><ul><li>خامة مخملي فاخرة</li><li>مضلع مريح</li><li>مناسب لارتداء يومي</li></ul>",
    price: 110,
    category_id: "tights",
    image_url: "/images/product-2.webp",
    is_active: true,
    is_featured: true,
    slug: "كولون-خملي-مضلع-ابيض",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "كولون بناتي", slug: "tights" }
  },
  {
    id: "3",
    name: "ليجن كولون قطني مضلع - أحمر",
    description: "<p>ليجن كولون قطني مضلع بلون أحمر غامق مميز. مناسب للمدرسة والخروجات. خامة قطنية تسمح بتهوية البشرة.</p><ul><li>100% قطن مصري</li><li>لون ثابت</li><li>مناسب للمدرسة والخروج</li></ul>",
    price: 85,
    category_id: "leggings",
    image_url: "/images/product-11.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-كولون-قطني-مضلع-احمر",
    unit: "دستة",
    stock_quantity: 180,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "4",
    name: "كولون قطني مضلع - ملون",
    description: "<p>كولون قطني مضلع بألوان متعددة: أبيض، وردي، بيج، أسود. ناعم ومرن، مناسب لجميع المناسبات. لمسة فاخرة بسعر جملة.</p><ul><li>خامات قطن مصري</li><li>ألوان متعددة</li><li>مناسب من سن 2 لـ 16</li></ul>",
    price: 90,
    category_id: "tights",
    image_url: "/images/product-4.webp",
    is_active: true,
    is_featured: true,
    slug: "كولون-قطني-مضلع-ملون",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "كولون بناتي", slug: "tights" }
  },
  {
    id: "5",
    name: "ليجن مخملي مضلع - ملون",
    description: "<p>ليجن مخملي مضلع بألوان متنوعة: أبيض، وردي، بيج، أسود، رمادي. خامة مخملي فاخرة توفر دفئاً وراحة. مناسب للشتاء والخروجات.</p><ul><li>خامة مخملي دافئة</li><li>ألوان متعددة</li><li>مناسبة للشتاء</li></ul>",
    price: 100,
    category_id: "leggings",
    image_url: "/images/product-10.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-خملي-مضلع-ملون",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "6",
    name: "ليجن مضلع أنيق - ملون",
    description: "<p>ليجن مضلع بتصميم أنيق بألوان ناعمة: أبيض، وردي، أسود، رمادي. مناسب للخروجات والمناسبات. خامة قطنية مريحة.</p><ul><li>تصميم أنيق</li><li>خامة قطنية مريحة</li><li>ألوان ناعمة</li></ul>",
    price: 85,
    category_id: "leggings",
    image_url: "/images/product-12.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-مضلع-انيق-ملون",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "7",
    name: "كولون بناتي مضلع - ملون",
    description: "<p>كولون بناتي مضلع بألوان متعددة. طباعة مميزة مع فيونكات وقلوب. ناعم ومريح، مناسب للمدرسة والخروجات اليومية.</p><ul><li>طباعة فيونكات وقلوب</li><li>خامة مريحة</li><li>مناسب يومياً</li></ul>",
    price: 90,
    category_id: "tights",
    image_url: "/images/product-7.webp",
    is_active: true,
    is_featured: false,
    slug: "كولون-بناتي-مضلع-ملون",
    unit: "دستة",
    stock_quantity: 180,
    categories: { name: "كولون بناتي", slug: "tights" }
  },
  {
    id: "8",
    name: "ليجن بطباعة فراشات وقلوب",
    description: "<p>ليجن بناتي بطباعة فراشات وقلوب على خلفية بيضاء ورمادية. متعدد الألوان: أبيض بفيونكات وردية، رمادي بفراشات. حماية من البثور، قطن مطبوخ، ارق الغزول.</p><ul><li>طباعة فراشات وقلوب</li><li>حماية من البثور</li><li>ارق الغزول</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 95,
    category_id: "leggings",
    image_url: "/images/product-8.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-طباعة-فراشات-وقلوب",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "9",
    name: "ليجن مبروش برسومات - رمادي",
    description: "<p>ليجن مبروش برسومات كرتونية على خلفية رمادية وسوداء. مريح في الحركة، خامة قطنية فاخرة، مناسب للمدرسة والعب.</p><ul><li>برسومات كرتونية</li><li>خامة قطنية</li><li>مريج في الحركة</li><li>المقاسات: 2-14 سنة</li></ul>",
    price: 90,
    category_id: "leggings",
    image_url: "/images/product-9.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-مبروش-رسومات-رمادي",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "10",
    name: "ليجن بطباعة فراشات وقلوب - ملون",
    description: "<p>ليجن بناتي بطباعة فراشات وقلوب بألوان متعددة: أبيض، وردي، رمادي. خامة قطنية مريحة، مناسب للمدرسة والخروجات.</p><ul><li>طباعة فراشات وقلوب</li><li>خامة قطنية</li><li>حمية من البثور</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 95,
    category_id: "leggings",
    image_url: "/images/product-10.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-طباعة-فراشات-قلوب-ملون",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "11",
    name: "ليجن مضلع بفيونكات شتوي",
    description: "<p>ليجن مضلع بفيونكات مخملية مناسب للشتاء. متوفر بعدة ألوان: أبيض، أحمر، أسود، بيج. فيونكة ترتين، دافئ وناعم، مضلع.</p><ul><li>فيونكة ترتين</li><li>دافئ وناعم</li><li>مضلع مريح</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 110,
    category_id: "leggings",
    image_url: "/images/product-11.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-مضلع-فيونكات-شتوي",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "12",
    name: "ليجن مضلع بأرانب - شتوي",
    description: "<p>ليجن مضلع بطباعة أرانب مميزة. ديدب ترتين، دافئ وناعم جداً. مناسب للشتاء. متوفر بالأبيض والوردي والرمادي.</p><ul><li>طباعة أرانب مميزة</li><li>荩يلز فرو داخلي</li><li>دافئ جداً</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 120,
    category_id: "leggings",
    image_url: "/images/product-12.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-مضلع-ارانب-شتوي",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "13",
    name: "ليجن مضلع بأرانب مبروش",
    description: "<p>ليجن مضلع بطباعة أرانب مبروش. خامة قطنية فاخرة، دافئ وناعم. مناسب للمدرسة والخروجات. متوفر بالأبيض والوردي.</p><ul><li>طباعة أرانب مبروش</li><li>خامة قطنية فاخرة</li><li>دافئ وناعم</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 105,
    category_id: "leggings",
    image_url: "/images/product-13.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-مضلع-ارانب-مبروش",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "14",
    name: "ليجن فرو داخلي - أبيض/وردي/أسود",
    description: "<p>ليجن فرو داخلي دافئ ومريح. رفاهية حقيقية بخامة فاخرة. متوفر بالأبيض والوردي والأسود. مناسب للشتاء البارد.</p><ul><li>فرو داخلي دافئ</li><li>خامة فاخرة</li><li>رفاهية حقيقية</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 130,
    category_id: "leggings",
    image_url: "/images/product-14.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-فرو-داخلي-ابيض-وردي-اسود",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "15",
    name: "ليجن مضلع بأرانب مبروش - ملون",
    description: "<p>ليجن مضلع بطباعة أرانب مبروش بألوان متعددة. خامة قطنية مطبوخة، مريح في الحركة، ارق الغزول. متوفر بالأبيض والوردي والرمادي والأسود.</p><ul><li>طباعة أرانب مبروش</li><li>خامة قطنية مطبوخة</li><li>ارق الغزول</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 105,
    category_id: "leggings",
    image_url: "/images/product-15.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-مضلع-ارانب-مبروش-ملون",
    unit: "دستة",
    stock_quantity: 200,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "16",
    name: "ليجن مضلع بتصميم بلو - ملون",
    description: "<p>ليجن مضلع بتصميم B.Luvz المميز. متوفر بأربعة ألوان: وردي، أزرق، أبيض، أسود. تفاصيل تفرف، طباعة مميزة.</p><ul><li>تصميم B.Luvz المميز</li><li>طباعة أرانب</li><li>تفاصيل مميزة</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 110,
    category_id: "leggings",
    image_url: "/images/product-16.webp",
    is_active: true,
    is_featured: true,
    slug: "ليجن-مضلع-تصميم-بلو",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "17",
    name: "ليجن مضلع بطباعة أرانب - رمادي/أسود",
    description: "<p>ليجن مضلع بطباعة أرانب على خلفية رمادية وسوداء. تفاصيل تعتل العين، طبعة مميزة. مناسب للمدرسة والخروجات.</p><ul><li>طباعة أرانب مميزة</li><li>تفاصيل تعتل العين</li><li>خامة مريحة</li><li>المقاسات: 2-14 سنة</li></ul>",
    price: 100,
    category_id: "leggings",
    image_url: "/images/product-17.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-مضلع-طباعة-ارانب-رمادي",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "18",
    name: "ليجن بطباعة فيونكات وقلوب - مباع بالجملة",
    description: "<p>تشكيلة ليجن بناتي بطباعة فيونكات وقلوب. متوفر بعدة ألوان: أبيض، رمادي، وردي، أسود. مثالي للبيع بالجملة للمتاجر.</p><ul><li>تشكيلة متنوعة</li><li>طباعة فيونكات وقلوب</li><li>مثالي للبيع بالجملة</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 85,
    category_id: "leggings",
    image_url: "/images/product-18.webp",
    is_active: true,
    is_featured: false,
    slug: "ليجن-طباعة-فيونكات-قلوب-جملة",
    unit: "دستة",
    stock_quantity: 300,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
  {
    id: "19",
    name: "كولون فرو داخلي بأرانب - وردي",
    description: "<p>كولون فرو داخلي بطباعة أرانب مميزة. نقشة ناعمة، أناقه لا تقاوم. دافئ ومريح، مناسب للشتاء.</p><ul><li>فرو داخلي دافئ</li><li>طباعة أرانب مميزة</li><li>نقشة ناعمة</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 125,
    category_id: "tights",
    image_url: "/images/product-19.webp",
    is_active: true,
    is_featured: true,
    slug: "كولون-فرو-داخلي-ارانب-وردي",
    unit: "دستة",
    stock_quantity: 150,
    categories: { name: "كولون بناتي", slug: "tights" }
  },
  {
    id: "20",
    name: "تشكيلة ليجن بناتي متنوعة - مباع بالجملة",
    description: "<p>تشكيلة متنوعة من ليجن بناتي بطباعات مختلفة. مثالي للبائعين بالجملة. اختار ما يناسبك من تصاميمنا المميزة.</p><ul><li>تشكيلة متنوعة</li><li>طباعات مميزة</li><li>مثالي للبيع بالجملة</li><li>المقاسات: 2-16 سنة</li></ul>",
    price: 85,
    category_id: "leggings",
    image_url: "/images/product-20.webp",
    is_active: true,
    is_featured: false,
    slug: "تشكيلة-ليجن-بناتي-متنوعة-جملة",
    unit: "دستة",
    stock_quantity: 300,
    categories: { name: "ليجن بناتي", slug: "leggings" }
  },
];

export const staticCategories = [
  { id: "leggings", name: "ليجن بناتي", image_url: "/images/product-1.webp", slug: "leggings", icon: "👗" },
  { id: "tights", name: "كولون بناتي", image_url: "/images/product-4.webp", slug: "tights", icon: "👕" },
  { id: "basics", name: "بيزك", image_url: "/images/product-8.webp", slug: "basics", icon: "✨" }
];

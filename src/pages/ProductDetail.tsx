import { useParams, Link } from "react-router-dom";
import { staticProducts, Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Truck, ChevronLeft } from "lucide-react";
import ProductSchema from "@/components/ProductSchema";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import DOMPurify from "dompurify";


const WHATSAPP_PHONE = "201006395252";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Find the product statically based on slug or ID
  const staticProduct = staticProducts.find(p => p.slug === id || p.slug === decodeURIComponent(id!) || p.id === id) as Product;
  
  const p = staticProduct;
  const similarProducts = p ? staticProducts
    .filter(item => item.category_id === p.category_id && item.id !== p.id)
    .slice(0, 4) : [];
  const mainImage = selectedImage || p?.image_url;

  if (!p) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-xl font-cairo text-muted-foreground">المنتج غير موجود</p>
          <Link to="/products">
            <Button className="font-cairo gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة للمنتجات
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  const gallery = p?.image_urls && Array.isArray(p.image_urls) 
    ? [p.image_url, ...p.image_urls].filter((url): url is string => !!url) 
    : [p?.image_url].filter((url): url is string => !!url);

  const handleWhatsApp = () => {
    const msg = `السلام عليكم، عايز أطلب "${p.name}" بالجملة.\n\nالكود: ${p.id}\nالكمية: ___ دستة`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{p.name} - مصنع الكينج لليجن والكولون</title>
        <meta name="description" content={p.description?.substring(0, 160) || `تسوق ${p.name} بأفضل سعر من مصنع الكينج.`} />
        <meta property="og:title" content={`${p.name} - مصنع الكينج لليجن والكولون`} />
        <meta property="og:description" content={p.description?.substring(0, 160) || `تسوق ${p.name} بأفضل سعر من مصنع الكينج.`} />
        <meta property="og:image" content={mainImage || '/images/product-1.webp'} />
        <meta name="twitter:title" content={`${p.name} - مصنع الكينج لليجن والكولون`} />
        <meta name="twitter:description" content={p.description?.substring(0, 160) || `تسوق ${p.name} بأفضل سعر من مصنع الكينج.`} />
        <meta name="twitter:image" content={mainImage || '/images/product-1.webp'} />
      </Helmet>
      <ProductSchema product={p} finalPrice={p.price} />
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm font-cairo text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link to="/products" className="hover:text-primary transition-colors">المنتجات</Link>
            {p.categories && (
              <>
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="text-primary">{p.categories.name}</span>
              </>
            )}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-secondary/20 rounded-3xl overflow-hidden border border-border aspect-square flex items-center justify-center relative">
                {mainImage ? (
                  <img src={mainImage} alt={`شراء ${p.name} من مصنع الكينج لملابس الأطفال بالجملة`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted-foreground font-cairo">لا توجد صورة</div>
                )}
                {p.is_featured && (
                  <Badge className="absolute top-4 right-4 font-cairo text-sm px-3 py-1" style={{ background: "var(--premium-gradient)" }}>
                    ⭐ منتج مميز
                  </Badge>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === img || (!selectedImage && i === 0) ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
                    >
                      <img src={img} alt={`صورة إضافية للمنتج ${p.name} - مصنع الكينج`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              {p.categories && (
                <Badge variant="secondary" className="font-cairo text-xs w-fit mb-3">
                  {p.categories.name}
                </Badge>
              )}

              <h1 className="text-3xl md:text-4xl font-cairo font-extrabold text-foreground mb-4">
                {p.name}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-cairo text-muted-foreground">(تقييم العملاء)</span>
              </div>

              {p.unit && (
                <p className="text-lg font-cairo text-muted-foreground mb-4">الوحدة: <span className="font-bold text-foreground">{p.unit}</span></p>
              )}

              {p.description && (
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none mb-8 font-cairo text-muted-foreground leading-relaxed prose-headings:text-foreground prose-h2:text-2xl prose-h3:text-xl prose-h3:text-primary prose-strong:text-foreground prose-p:mb-4 prose-ul:mb-4 prose-ul:list-disc prose-ul:pl-4 prose-li:mb-2 whitespace-pre-line"
                  dir="auto"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p.description) }}
                />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-cairo font-semibold">شحن سريع</span>
                </div>
                <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm font-cairo font-semibold">جودة عالية</span>
                </div>
              </div>

              <Button
                size="lg"
                className="font-cairo text-lg gap-2 py-6 rounded-xl w-full bg-green-600 hover:bg-green-500 text-white"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                اطلب عبر الواتساب
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {similarProducts && similarProducts.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-cairo font-extrabold text-foreground text-center mb-10">
              منتجات مشابهة
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  linkTo={`/products/${p.slug || p.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;


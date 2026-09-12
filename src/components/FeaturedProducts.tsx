import ProductCard from "./ProductCard";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { staticProducts, staticCategories } from "@/data/products";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = staticCategories;
  
  let displayProducts = staticProducts.filter(p => p.is_active);
  if (selectedCategory) {
    displayProducts = displayProducts.filter(p => p.category_id === selectedCategory);
  }
  displayProducts = displayProducts.slice(0, 8);

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 mb-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-4 relative z-10">
        <div>
          <span className="inline-block text-primary tracking-widest uppercase font-cairo font-semibold text-sm mb-2">
            أحدث الإصدارات
          </span>
          <h2 className="text-3xl md:text-4xl font-cairo font-extrabold text-foreground">
            منتجات مختارة لك
          </h2>
        </div>
        <Link to="/products" className="hidden md:flex items-center gap-2 font-cairo text-foreground/70 hover:text-primary transition-colors">
          عرض الكل
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Category Tabs / Cards */}
      {categories.length > 0 && (
        <div className="container mx-auto px-4 mb-10 relative z-10">
          <div className="flex justify-center items-center gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">

            {/* Dynamic Category Cards */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => navigate(`/products?category=${category.slug || category.id}`)}
                className={`snap-center shrink-0 flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group border-border bg-card shadow-sm hover:border-primary/50`}
              >
                {category.image_url ? (
                  <div className="absolute inset-0">
                    <img 
                      src={category.image_url} 
                      alt={`تصنيف ${category.name} - مصنع الكينج للملابس بالجملة`} 
                      loading="lazy"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-opacity duration-300" />
                )}
                
                <div className={`relative z-10 flex flex-col items-center ${category.image_url ? 'text-white mt-auto pb-4' : ''}`}>
                  {!category.image_url && (
                     <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-muted mb-2 border border-border/50 text-2xl">
                      {category.icon || "✨"}
                    </div>
                  )}
                  <span className={`font-cairo font-semibold text-sm text-center px-2 transition-colors ${
                    category.image_url 
                      ? 'text-white' 
                      : 'text-foreground group-hover:text-primary'
                  }`}>
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="w-full relative group mt-8">
        <div className="flex items-stretch gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 px-4 scrollbar-hide snap-x">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="w-[260px] md:w-[300px] flex-none snap-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
          
          {displayProducts.length === 0 && (
            <div className="w-full flex items-center justify-center py-12 text-muted-foreground font-cairo">
              لا توجد منتجات حالياً
            </div>
          )}
        </div>
        
        {/* Fading edges */}
        <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      </div>
      
      <div className="flex justify-center mt-8 md:hidden relative z-10">
        <Link to="/products" className="flex items-center gap-2 font-cairo text-sm font-semibold text-primary">
          عرض كل المنتجات
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;

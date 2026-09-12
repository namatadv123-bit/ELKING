import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { optimizeImageUrl } from "@/utils/imageOptimizer";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    discount_percentage?: number | null;
    unit?: string | null;
    stock_quantity?: number | null;
    image_url: string | null;
    categories?: { name: string; slug: string } | null;
    slug?: string | null;
  };
  onOrder?: () => void;
  linkTo?: string;
}

const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, "");

const WHATSAPP_PHONE = "201006395252";

const ProductCard = memo(({ product, onOrder, linkTo }: ProductCardProps) => {
  const href = linkTo || `/products/${product.slug || product.id}`;

  const optimizedImage = useMemo(() => optimizeImageUrl(product.image_url), [product.image_url]);

  const plainDescription = useMemo(
    () => (product.description ? stripHtml(product.description) : null),
    [product.description]
  );

  const handleWhatsApp = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const msg = `السلام عليكم، عايز أطلب "${product.name}" بالجملة.\n\nالكود: ${product.id}\nالكمية: ___ دستة`;
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    },
    [product.name, product.id]
  );

  return (
    <motion.div
      className="glass-card rounded-[1.2rem] overflow-hidden group relative flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link to={href} className="block relative w-full h-full flex flex-col p-3">
        <div className="aspect-square w-full bg-black/40 rounded-xl relative overflow-hidden group">
          {product.image_url ? (
            <img
              src={optimizedImage}
              alt={`منتج ${product.name} - مصنع الكينج لليجن والكولون`}
              loading="lazy"
              width="400"
              height="400"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-xs md:text-sm bg-muted/5">
              لا توجد صورة
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
            {product.categories && (
              <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-medium bg-black/60 backdrop-blur-md text-primary px-3 py-1.5 rounded-full shadow-sm border border-primary/20">
                {product.categories.name}
              </span>
            )}
            {product.unit && (
              <span className="text-[10px] md:text-[11px] font-bold bg-primary/90 backdrop-blur-md text-black px-3 py-1.5 rounded-full shadow-sm">
                {product.unit}
              </span>
            )}
          </div>

          <button 
            onClick={handleWhatsApp}
            className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-600/90 backdrop-blur-md text-white shadow-lg active:scale-95 hover:bg-green-500 transition-all translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            aria-label="اطلب عبر الواتساب"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[11px] font-bold">اطلب</span>
          </button>
        </div>

        <div className="pt-5 pb-2 px-2 relative z-10 flex flex-col flex-1 text-right">
          <div className="flex-1">
            <h3 className="text-sm md:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            {plainDescription && (
              <p className="text-[11px] md:text-xs text-muted-foreground/80 font-light mb-3 line-clamp-2 leading-relaxed"
                 title={plainDescription}>
                {plainDescription}
              </p>
            )}
          </div>
          
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-colors mt-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>اطلب عبر الواتساب</span>
          </button>
        </div>
      </Link>
    </motion.div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;

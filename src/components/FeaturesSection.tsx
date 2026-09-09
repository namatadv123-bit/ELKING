import { motion } from "framer-motion";
import { useSiteSettings, type SiteSettings } from "@/hooks/useSiteSettings";

const defaultShowcase = "/images/product-4.webp";

const FeaturesSection = () => {
  const { data } = useSiteSettings();
  const settings = data as SiteSettings | null;
  const showcaseImage = settings?.features_image || defaultShowcase;
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-blue w-96 h-96 top-1/2 left-0 -translate-y-1/2 opacity-30" />
        <div className="orb orb-red w-80 h-80 bottom-0 right-1/4 opacity-20" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        <motion.div
          className="flex-1 w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative group perspective-1000 float-animation">
            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-blue-red rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity duration-700 blur-2xl pointer-events-none" />
            
            <div className="relative glass border border-white/20 p-3 rounded-[2.5rem] shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-red-500/10 z-10 rounded-[2.5rem] pointer-events-none" />
              <img
                src={showcaseImage}
                alt="تشكيلة مصنع الكينج - ليجن بناتي جملة وكولون بناتي ومملابس أطفال بالجملة"
                width={600}
                height={800}
                loading="lazy"
                className="relative w-full max-w-sm md:max-w-md object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ aspectRatio: "3/4" }}
              />

              {/* Floating feature badge */}
              <motion.div
                className="absolute -right-5 bottom-12 glass rounded-2xl p-4 shadow-xl z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-premium-gradient flex items-center justify-center text-xl">
                    ✨
                  </div>
                  <div>
                    <div className="text-sm font-black text-foreground">جودة فائقة</div>
                    <div className="text-xs text-muted-foreground">خامات مختارة بعناية</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="flex-1 text-center md:text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="badge-premium">مميزاتنا</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
            مصنع الكينج <br />
            <span className="text-gradient block mt-2">
              ليجن بناتي — نعومة تواكب حركة طفلتك
            </span>
          </h2>
          
          <div className="divider-gradient mb-10 w-2/3 mx-auto md:mx-0 md:ml-auto" />

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 bottom-8 right-7 w-0.5 bg-border hidden md:block" />
          <ul className="space-y-8 text-base md:text-lg text-foreground/70">

            {[
              { title: "خامات قطنية فاخرة", desc: "ننتقي أجود أنواع القطن المصري لضمان ملمس ناعم يحمي بشرة طفلتك من التحسس. ليجن قطن مصري ممتاز." },
              { title: "مرونة وحرية في الحركة", desc: "تصميمات مطاطية مرنة تتكيف مع حركة الأطفال المستمرة، وتوفر أقصى درجات الراحة. ليجن مطاطي عالي." },
              { title: "ألوان ثابتة وجذابة", desc: "نستخدم صبغات عالية الجودة تضمن بقاء الألوان زاهية حتى بعد الغسيل المتكرر. ملابس أطفال مقاومة للغسيل." },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-right group relative z-10"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
              >
                <div className="w-14 h-14 flex-shrink-0 glass text-primary flex items-center justify-center rounded-2xl text-xl font-bold group-hover:scale-110 transition-all duration-300 font-en shadow-md"
                     style={{ border: "1px solid rgba(0, 51, 204, 0.2)" }}
                >
                  0{i + 1}
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-2xl border border-border/50 flex-1 group-hover:border-primary/30 transition-colors">
                  <h3 className="text-foreground text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm md:text-base font-light text-muted-foreground/90 leading-relaxed max-w-sm mx-auto md:mx-0">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;


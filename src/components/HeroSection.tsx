import { motion } from "framer-motion";
import { useSiteSettings, type SiteSettings } from "@/hooks/useSiteSettings";
import { optimizeImageUrl } from "@/utils/imageOptimizer";

const defaultHeroImage = "/images/product-1.jpg";

const HeroSection = () => {
  const { data } = useSiteSettings();
  const settings = data as SiteSettings | null;
  const heroImage = settings?.hero_image || defaultHeroImage;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* ── Animated background orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb orb-blue w-[500px] h-[500px] -top-32 -right-32 opacity-60" />
        <div
          className="orb orb-red w-[400px] h-[400px] bottom-0 -left-20 opacity-50"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="orb orb-gold w-[300px] h-[300px] top-1/2 right-1/3 opacity-30"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 92% 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 92% 42%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* ── Text Content ── */}
        <motion.div
          className="flex-1 text-center lg:text-right max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="badge-premium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              مصنع الكينج — ليجن بناتي جملة • خبرة سورية بأيدٍ مصرية
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-bold leading-[1.1] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-foreground mb-1">ليجن بناتي جملة</span>
            <span className="text-gradient block">
              كولون بناتي — نعومة وراحة تدوم
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.div
            className="flex items-center justify-center lg:justify-end gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="divider-gradient flex-1 max-w-[100px]" />
            <p className="text-base font-semibold text-muted-foreground tracking-widest">
              مقاسات 2-16 | قطن مصري | ألوان متنوعة
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            مصنع الكينج — ليجن بناتي جملة، كولون بناتي جملة، ملابس أطفال بالجملة.
            أجود خامات القطن المصري، جودة عالية، نعومة فائقة، وراحة تدوم طوال اليوم.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex items-center justify-center lg:justify-end gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {[
              { value: "+1000", label: "عميل سعيد" },
              { value: "100%", label: "جودة مضمونة" },
              { value: "2-16", label: "مقاسات متاحة" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <a href="/products" className="btn-primary gap-2 text-lg px-10 py-4">
              <span>اكتشف المجموعة</span>
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#about" className="btn-outline text-lg px-10 py-4">
              من نحن
            </a>
          </motion.div>
        </motion.div>

        {/* ── Hero Image ── */}
        <motion.div
          className="flex-1 w-full flex justify-center lg:justify-start relative"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Decorative ring */}
          <div
            className="absolute inset-0 m-auto w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full opacity-20 pointer-events-none"
            style={{
              background: "conic-gradient(from 0deg, hsl(220 92% 42%), hsl(4 88% 50%), hsl(43 100% 50%), hsl(220 92% 42%))",
              filter: "blur(2px)",
              animation: "gradient-shift 6s linear infinite",
            }}
          />

          {/* Image card */}
          <div className="relative w-full max-w-[360px] lg:max-w-[430px] float-animation">
            {/* Glow behind image */}
            <div
              className="absolute -inset-6 rounded-[3rem] opacity-30 pointer-events-none"
              style={{ background: "var(--gradient-blue-red)", filter: "blur(40px)" }}
            />

            {/* Main image container */}
            <div
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/20 shadow-2xl"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px -20px rgba(0,51,204,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              {/* Top gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-red-500/10 z-10 pointer-events-none" />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

              <img
                src={`${optimizeImageUrl(heroImage, 900)}?v=2`}
                alt="مصنع الكينج - ليجن بناتي جملة وكولون بناتي وملابس أطفال بالجملة"
                width={900}
                height={1125}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />

            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 30C360 60 720 0 1080 30C1260 45 1350 38 1440 30V60H0V30Z"
            fill="hsl(var(--background))"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;


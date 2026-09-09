import { motion } from "framer-motion";
import { Eye, Target, Zap, Award } from "lucide-react";
import { useSiteSettings, type SiteSettings } from "@/hooks/useSiteSettings";

const features = [
  { icon: "🧵", title: "خامات فاخرة — قطن مصري", desc: "أجود أنواع القطن المصري المضلع والمطاط الممتاز لضمان نعومة لا مثيل لها. ليجن قطن مصري." },
  { icon: "🎨", title: "ألوان متنوعة وثابتة", desc: "تشكيلة واسعة من الألوان الزاهية التي تناسب كل ذوق وكل مناسبة. ملابس أطفال مقاومة للغسيل." },
  { icon: "📏", title: "مقاسات 2-16 — ليجن و كولون", desc: "نغطي جميع أعمار الأطفال من سن سنتين حتى سن السادسة عشرة. ليجن بناتي وكولون بناتي." },
  { icon: "🚀", title: "توصيل لكل مصر — جملة", desc: "شحن سريع وآمن لجميع محافظات الجمهورية بأسعار تنافسية. ليجن بناتي جملة، كولون بناتي جملة." },
];

const AboutSection = () => {
  const { data } = useSiteSettings();
  const settings = data as SiteSettings | null;

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-background">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb orb-blue w-[400px] h-[400px] bottom-0 right-0 opacity-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="orb orb-red w-[300px] h-[300px] top-20 left-10 opacity-30"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Top section: text + image ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

          {/* Image */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-[480px] mx-auto">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-[3rem] opacity-25 pointer-events-none"
                style={{ background: "var(--gradient-blue-red)", filter: "blur(35px)" }}
              />
              {/* Image wrapper */}
              <div
                className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/20"
                style={{
                  boxShadow: "0 25px 70px -15px rgba(0,51,204,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-transparent to-red-500/10 z-10 pointer-events-none" />
                <img
                  src={settings?.about_image || "/images/product-2.webp"}
                  alt="مصنع الكينج - ليجن بناتي جملة - ملابس أطفال بالجملة"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">👑</div>
                  <div>
                    <div className="text-sm font-black text-foreground">خبرة سورية</div>
                    <div className="text-xs text-muted-foreground">بأيدٍ مصرية</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 grid grid-cols-4 gap-2 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="badge-premium mb-6">✨ من نحن — مصنع ملابس أطفال مصر</div>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              مصنع الكينج{" "}
              <span className="text-gradient">ليجن بناتي جملة</span>
            </h2>

            <div className="divider-gradient mb-8" />

            <div className="space-y-5 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                مرحباً بك في عالم <strong className="text-foreground font-bold">مصنع الكينج</strong>، الوجهة
                الأولى <strong className="text-foreground font-bold">لملابس الأطفال وتحديداً الليجن والكولون البناتي</strong> عالي الجودة.
              </p>
              <p>
                نحن <strong className="text-foreground font-bold">مصنع ملابس أطفال</strong> متخصص في{" "}
                <strong className="text-foreground font-bold">ليجن بناتي جملة</strong> و{" "}
                <strong className="text-foreground font-bold">كولون بناتي جملة</strong>، نحمل{" "}
                <strong className="text-foreground font-bold">خبرة سورية</strong> راسخة في صناعة الملابس مع
                الأيدي المصرية المبدعة، لنقدم لكم منتجات تجمع بين الجودة العالية والسعر المناسب.
              </p>
              <p>
                كل قطعة من مجموعتنا مصنوعة بعناية فائقة لتضمن{" "}
                <strong className="text-foreground font-bold">نعومة وراحة تدوم</strong> طوال اليوم لطفلتك الحبيبة.
                نستخدم أجود أنواع <strong className="text-foreground font-bold">القطن المصري</strong> الذي يتميز بنعومته الفائقة وقوته.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-4 justify-end">
              <a href="/products" className="btn-primary gap-2">
                <span>تسوق الآن</span>
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/#contact" className="btn-outline gap-2">
                تواصل معنا
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Features grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-card p-8 text-right group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gradient-blue-red)" }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-black text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Vision / Mission cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Eye,
              emoji: "🎯",
              title: "رؤيتنا — مصنع ملابس أطفال",
              text: "أن نكون الخيار الأول والأفضل لملابس الأطفال في مصر والوطن العربي، من خلال تقديم منتجات عالية الجودة تجمع بين الأناقة والراحة. ليجن بناتي جملة، كولون بناتي جملة.",
              gradient: "from-primary/10 to-primary/5",
            },
            {
              icon: Target,
              emoji: "💎",
              title: "مهمتنا — ليجن بناتي جملة",
              text: "توفير أزياء تمنح طفلتك راحة وحرية في الحركة، مع الالتزام بأعلى معايير جودة التصنيع وتقديم خدمة عملاء متميزة. ملابس أطفال قطن مصري، مقاومة للغسيل.",
              gradient: "from-accent/10 to-accent/5",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className={`glass-card p-10 text-right bg-gradient-to-br ${item.gradient}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: i === 0 ? "var(--gradient-blue-red)" : "var(--gradient-gold)" }}
                >
                  {item.emoji}
                </div>
                <h3 className="text-2xl font-black text-foreground mt-2">{item.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


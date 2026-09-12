import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staticTestimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/3 rounded-full blur-[80px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-cairo font-extrabold text-foreground mb-4">
            <span className="text-gradient">آراء عملائنا</span>
          </h2>
          <p className="text-muted-foreground font-cairo max-w-2xl mx-auto">تجارب عملائنا مع منتجات مصنع الكينج</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {staticTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="bg-card rounded-2xl p-8 border border-border relative group hover:border-primary/30 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: "var(--card-shadow)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Quote className="w-8 h-8 text-primary/20 mb-4 relative z-10" />
              <div className="flex gap-0.5 mb-4 relative z-10">
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground font-cairo mb-6 leading-relaxed relative z-10">"{t.content}"</p>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-cairo font-bold text-sm shrink-0" style={{ background: "var(--premium-gradient)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-cairo font-bold text-foreground">{t.name}</p>
                  <p className="font-cairo text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { staticServices } from "@/data/services";
import * as Icons from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-cairo font-extrabold text-foreground mb-4">
            <span className="text-gradient">لماذا تختارنا؟</span>
          </h2>
          <p className="text-muted-foreground font-cairo max-w-2xl mx-auto">
            نقدم لك أفضل الخدمات والمنتجات بأعلى معايير الجودة لضمان رضاك التام
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticServices.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.ShieldCheck;
            return (
              <motion.div
                key={service.id}
                className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                style={{ boxShadow: "var(--card-shadow)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -8, boxShadow: "var(--card-hover-shadow)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="h-20 w-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-cairo font-bold text-foreground mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground font-cairo text-sm relative z-10 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-cairo font-semibold hover:underline"
          >
            تصفح منتجاتنا الآن
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

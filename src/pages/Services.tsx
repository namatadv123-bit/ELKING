import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { staticServices } from "@/data/services";
import { ShieldCheck, Tags, Truck } from "lucide-react";

const iconMap: Record<string, any> = { ShieldCheck, Tags, Truck };

const Services = () => {
  const services = staticServices;

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl font-cairo font-extrabold text-foreground mb-4">
              <span className="text-gradient">لماذا تختارنا؟</span>
            </h1>
            <p className="text-muted-foreground font-cairo max-w-2xl mx-auto">
              نقدم لك أفضل الخدمات والمنتجات بأعلى معايير الجودة لضمان رضاك التام
            </p>
          </motion.div>

          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = iconMap[service.icon] || ShieldCheck;
                return (
                  <motion.div
                    key={service.id}
                    className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                    style={{ boxShadow: "var(--card-shadow)" }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    whileHover={{ y: -8, boxShadow: "var(--card-hover-shadow)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="h-20 w-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                      <Icon className="w-10 h-10" />
                    </div>

                    <h2 className="text-xl font-cairo font-bold text-foreground mb-2 relative z-10">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground font-cairo text-sm relative z-10 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-muted-foreground font-cairo py-20">لا توجد منتجات حالياً</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;

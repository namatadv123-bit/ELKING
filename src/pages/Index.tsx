import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetaTags from "@/components/MetaTags";
import SchemaMarkup from "@/components/SchemaMarkup";

const FeaturedProducts = lazy(() => import("@/components/FeaturedProducts"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ArticlesSection = lazy(() => import("@/components/ArticlesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <MetaTags />
      <SchemaMarkup />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <FeaturedProducts />
          <FeaturesSection />
          <AboutSection />
          <ArticlesSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

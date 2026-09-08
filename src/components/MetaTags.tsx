import { Helmet } from "react-helmet-async";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const MetaTags = () => {
  const { data: settings } = useSiteSettings();

  if (!settings) return null;

  return (
    <Helmet>
      {/* Dynamic SEO */}
      <title>{settings.site_name ? `${settings.site_name} - ${settings.site_description || ""}` : "شركة الكينج - لليجن والكولون البناتي بجودة عالية"}</title>
      <meta name="description" content={settings.site_description || "شركة الكينج تقدم لك أفضل وأرقى خامات الليجن والكولون البناتي لتوفير أقصى درجات الراحة لأطفالكم"} />
      
      {/* Social Media Tags */}
      <meta property="og:title" content={settings.site_name || "شركة الكينج - لليجن والكولون البناتي بجودة عالية"} />
      <meta property="og:description" content={settings.site_description || "شركة الكينج تقدم لك أفضل وأرقى خامات الليجن والكولون البناتي لتوفير أقصى درجات الراحة لأطفالكم"} />
      <meta property="og:image" content={settings.hero_image || "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=1200"} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={settings.site_name || "شركة الكينج - لليجن والكولون البناتي بجودة عالية"} />
      <meta name="twitter:description" content={settings.site_description || "شركة الكينج تقدم لك أفضل وأرقى خامات الليجن والكولون البناتي لتوفير أقصى درجات الراحة لأطفالكم"} />
      <meta name="twitter:image" content={settings.hero_image || "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=1200"} />

      {/* Dynamic Favicon */}
      <link rel="icon" href={settings.favicon_url || "/logo-main.jpg"} />
      <link rel="shortcut icon" href={settings.favicon_url || "/logo-main.jpg"} />

      {/* Verification & Scripts */}
      {settings.google_site_verification && (
        <meta name="google-site-verification" content={settings.google_site_verification} />
      )}
      {settings.header_scripts && (
        <script type="text/javascript">{settings.header_scripts}</script>
      )}
    </Helmet>
  );
};

export default MetaTags;

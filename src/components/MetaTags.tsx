import { Helmet } from "react-helmet-async";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const FALLBACK_TITLE = "مصنع الكينج - لليجن والكولون البناتي بجودة عالية";
const FALLBACK_DESC = "مصنع الكينج تقدم لك أفضل وأرقى خامات الليجن والكولون البناتي لتوفير أقصى درجات الراحة لأطفالكم";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=1200";

const MetaTags = () => {
  const { data: settings } = useSiteSettings();

  if (!settings) return null;

  const siteName = settings.site_name || "مصنع الكينج";
  const siteDesc = settings.site_description || FALLBACK_DESC;
  const title = settings.site_name ? `${siteName} - ${siteDesc}` : FALLBACK_TITLE;
  const image = settings.hero_image || FALLBACK_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={siteDesc} />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href={settings.favicon_url || "/logo-main.jpg"} />
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


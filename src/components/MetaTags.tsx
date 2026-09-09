import { Helmet } from "react-helmet-async";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const FALLBACK_TITLE = "مصنع الكينج | ليجن بناتي جملة - كولون بناتي - ملابس أطفال بالجملة";
const FALLBACK_DESC = "مصنع الكينج - ليجن بناتي جملة، كولون بناتي جملة، ملابس أطفال بالجملة. أجود خامات القطن المصري، مقاسات 2-16، ألوان متنوعة. مصنع ملابس أطفال مصر.";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=1200";
const FALLBACK_KEYWORDS = "ليجن بناتي جملة,كولون بناتي جملة,ملابس اطفال بالجملة,مصنع ملابس اطفال,ملابس بنات بالجملة,تجارة جملة ملابس اطفال,سوق جملة ملابس اطفال,مورد ملابس اطفال,ليجن اطفال جملة,بنطلونات اطفال جملة,ملابس اطفال قطن مصري,ملابس اطفال مقاومة للغسيل,ملابس بنات خروج,ملابس اطفال عزومات,ملابس بنات صيفي,ملابس بنات شتوي";

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
      <meta name="keywords" content={FALLBACK_KEYWORDS} />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href={settings.favicon_url || "/logo/logo.jpg"} />
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


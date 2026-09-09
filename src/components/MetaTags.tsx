import { Helmet } from "react-helmet-async";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const FALLBACK_TITLE = "„’‰⁄ «·ﬂÌ‰Ã | ·ÌÃ‰ »‰« Ì Ã„·… - ﬂÊ·Ê‰ »‰« Ì - „·«»” √ÿ›«· »«·Ã„·…";
const FALLBACK_DESC = "„’‰⁄ «·ﬂÌ‰Ã - ·ÌÃ‰ »‰« Ì Ã„·…° ﬂÊ·Ê‰ »‰« Ì Ã„·…° „·«»” √ÿ›«· »«·Ã„·…. √ÃÊœ Œ«„«  «·ﬁÿ‰ «·„’—Ì° „ﬁ«”«  2-16° √·Ê«‰ „ ‰Ê⁄…. „’‰⁄ „·«»” √ÿ›«· „’—.";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=1200";
const FALLBACK_KEYWORDS = "·ÌÃ‰ »‰« Ì Ã„·…,ﬂÊ·Ê‰ »‰« Ì Ã„·…,„·«»” «ÿ›«· »«·Ã„·…,„’‰⁄ „·«»” «ÿ›«·,„·«»” »‰«  »«·Ã„·…, Ã«—… Ã„·… „·«»” «ÿ›«·,”Êﬁ Ã„·… „·«»” «ÿ›«·,„Ê—œ „·«»” «ÿ›«·,·ÌÃ‰ «ÿ›«· Ã„·…,»‰ÿ·Ê‰«  «ÿ›«· Ã„·…,„·«»” «ÿ›«· ﬁÿ‰ „’—Ì,„·«»” «ÿ›«· „ﬁ«Ê„… ··€”Ì·,„·«»” »‰«  Œ—ÊÃ,„·«»” «ÿ›«· ⁄“Ê„« ,„·«»” »‰«  ’Ì›Ì,„·«»” »‰«  ‘ ÊÌ";

const MetaTags = () => {
  const { data: settings } = useSiteSettings();

  if (!settings) return null;

  const siteName = settings.site_name || "„’‰⁄ «·ﬂÌ‰Ã";
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
      <link rel="icon" href={settings.favicon_url || "/logo/logo.webp"} />
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


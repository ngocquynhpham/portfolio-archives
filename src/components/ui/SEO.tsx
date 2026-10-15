import { Helmet } from "react-helmet-async";

const SITE_URL = "https://ngocquynhpham.com";
const DEFAULT_TITLE = "Ngoc Quynh Pham — Frontend Developer Portfolio";
const DEFAULT_DESCRIPTION =
  "Experienced frontend developer with a focus on building engaging & accessible digital experiences — things that look good but are also built well under the hood.";
/** PNG — most messengers/social crawlers ignore SVG for og:image */
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_OG_WIDTH = "1200";
const DEFAULT_OG_HEIGHT = "630";
const SITE_NAME = "Ngoc Quynh Pham";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = "Ngoc Quynh Pham — Frontend Developer",
  type = "website",
  noindex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={DEFAULT_OG_WIDTH} />
      <meta property="og:image:height" content={DEFAULT_OG_HEIGHT} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}

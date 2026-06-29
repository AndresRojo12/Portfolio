import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/site";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.role}`;

  const pageDescription = description ?? siteConfig.description;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.portfolio,
    image: `${siteConfig.portfolio}/og-image.png`,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  return (
    <Helmet>
      <html lang="es" />

      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <meta name="author" content={siteConfig.author} />

      <meta name="keywords" content={siteConfig.keywords.join(", ")} />

      <meta name="robots" content="index, follow" />

      <meta name="theme-color" content="#030712" />

      <link rel="canonical" href={siteConfig.portfolio} />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={pageTitle} />

      <meta property="og:description" content={pageDescription} />

      <meta property="og:url" content={siteConfig.portfolio} />

      <meta
        property="og:image"
        content={`${siteConfig.portfolio}/og-image.png`}
      />

      <meta property="og:locale" content="es_CO" />

      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:locale" content="es_CO" />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={pageDescription} />

      <meta
        name="twitter:image"
        content={`${siteConfig.portfolio}/og-image.png`}
      />

      <link rel="canonical" href={siteConfig.portfolio} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;

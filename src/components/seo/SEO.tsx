import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/site";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({
  title,
  description,
}: SEOProps) => {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.role}`;

  const pageDescription =
    description ?? siteConfig.hero.subtitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="author"
        content={siteConfig.name}
      />

      <meta
        name="keywords"
        content="
        Full Stack Developer,
        React,
        React Native,
        Node.js,
        Express,
        TypeScript,
        PostgreSQL,
        Desarrollador Web,
        Colombia,
        Portafolio
        "
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:image"
        content={`${siteConfig.portfolio}/og-image.png`}
      />

      <meta
        property="og:url"
        content={siteConfig.portfolio}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Helmet>
  );
};

export default SEO;
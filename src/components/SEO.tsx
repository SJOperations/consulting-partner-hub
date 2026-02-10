import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const SEO = ({ 
  title = 'SJOps | Your Silent Growth Team',
  description = 'SJOps installs and runs the systems that scale a personal brand into a business. Offer design, funnels, CRM, automations, and growth operations for creators and founders.',
  path = '',
  type = 'website',
}: SEOProps) => {
  const siteUrl = 'https://sjoperations.com';
  const fullUrl = `${siteUrl}${path}`;
  const ogImage = `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="SJOps" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;

import { Helmet } from "react-helmet-async";

const SITE_NAME = "Hawkez Haven";
const BASE_URL = "https://hawkezhaven.org";
const DEFAULT_IMAGE = `${BASE_URL}/images/hero-horse.jpg`;

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export default function PageMeta({ title, description, path = "", image = DEFAULT_IMAGE }: PageMetaProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

import { Helmet } from "react-helmet-async";

interface PortfolioHelmetProps {
  title: string;
  description?: string;
  path: string;
  image?: string | null;
  robots?: string;
  type?: "website" | "article";
}

export function PortfolioHelmet({
  title,
  description = "Portfolio de développeur Full-Stack. Découvrez mes projets en React, TypeScript, NestJS, algorithmique, optimisation et architecture logicielle.",
  path,
  image,
  robots = "index, follow",
  type = "website",
}: PortfolioHelmetProps) {
  const baseUrl = "https://frozen1753.github.io/portfolio/";
  const fullUrl = baseUrl + path.replace(/^\//, "");

  // Gestion de l'image Open Graph
  const ogImage =
    image === null
      ? null
      : `${baseUrl}${(image || "default-og-image.png").replace(/^\//, "")}`;

  return (
    <Helmet>
      {/* Title */}
      <title>{`Portfolio – ${title}`}</title>

      {/* Description */}
      <meta name="description" content={description} />

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`Portfolio – ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />

      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={ogImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={`Portfolio – ${title}`} />
      <meta name="twitter:description" content={description} />

      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
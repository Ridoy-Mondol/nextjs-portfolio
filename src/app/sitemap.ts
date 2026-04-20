import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-chi-sepia-10.vercel.app";

  const projects = [
    "snipverse",
    "dao-dashboard",
    "snipdex",
    "qcfinder",
    "next-blog",
    "carvila",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

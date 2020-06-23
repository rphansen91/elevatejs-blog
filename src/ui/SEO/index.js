import React from "react";
import Helmet from "react-helmet";

const defaultUrl = process.env.PUBLIC_URL || "https://elevatejs.com"
const seoURL = path => defaultUrl + path;
const seoImageURL = (images, provider) => {
  if (images && typeof images === "string") return images;
  if (images && images[provider] && typeof images[provider] === "string")
    return images[provider];
  return defaultUrl + "/elevatejs_bkgd_1.91.png";
};

const getMetaTags = ({
  title,
  description,
  images,
  contentType,
  url,
  published,
  updated,
  category,
  tags,
  twitter
}) => {
  const metaTags = [
    { itemprop: "name", content: title },
    { itemprop: "description", content: description },
    { itemprop: "image", content: seoImageURL(images, "google") },
    { name: "description", content: description },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:site", content: "@elevatejs" },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: seoImageURL(images, "twitter") },
    { property: "og:title", content: title },
    { property: "og:type", content: contentType || "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: seoImageURL(images, "facebook") },
    { property: "og:description", content: description },
    { property: "og:site_name", content: "ElevateJS" },
    { property: "fb:app_id", content: "857737644405026" }
  ];

  if (published)
    metaTags.push({ property: "article:published_time", content: published });
  if (updated)
    metaTags.push({ property: "article:modified_time", content: updated });
  if (category)
    metaTags.push({ property: "article:section", content: category });
  if (tags) metaTags.push({ property: "article:tag", content: tags });

  return metaTags;
};

export default ({
  schema,
  title = "ElevateJS",
  description = "Elevate JavaScript delivers in depth breakdowns of popular open source libraries. (TypeScript, React, GraphQL)",
  path = "/",
  twitter = "@elevatejs",
  images = {
    google: "", // 1080x608
    twitter: "", // 1200x660
    facebook: "" // 1200x1200
  },
  contentType,
  published,
  updated,
  category,
  tags
}) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
      itemscope: undefined,
      itemtype: schema ? `http://schema.org/${schema}` : ""
    }}
    title={`${title.slice(0, 60)}`}
    link={[{ rel: "canonical", href: seoURL(path) }]}
    meta={getMetaTags({
      title: title.slice(0, 60),
      description,
      images,
      contentType,
      url: seoURL(path),
      published,
      updated,
      category,
      tags,
      twitter
    })}
  >
    {/* <script>{`
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-7183056818143738",
        enable_page_level_ads: true
      });
    `}</script> */}
    <script>{`
      var subscribersSiteId = "ab98af2c-2040-4d48-a68d-49a61af61ee5";
    `}</script>
  </Helmet>
);

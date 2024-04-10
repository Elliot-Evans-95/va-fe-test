// This has been copied from: https://nextjs.org/docs/app/api-reference/next-config-js/images#aws-cloudfront and edited
// Docs: https://aws.amazon.com/developer/application-security-performance/articles/image-optimization

interface CloudFrontLoader {
  src: string;
  width: string;
  quality: string;
}

export default function cloudfrontLoader({
  src,
  width,
  quality,
}: CloudFrontLoader) {
  // Assuming Development only for now
  if (!src.toLowerCase().includes("cloudfront")) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  const url = new URL(`https:${src}`);
  url.searchParams.set("format", "auto");
  url.searchParams.set("width", width.toString());
  url.searchParams.set("quality", (quality || 75).toString());
  return url.href;
}

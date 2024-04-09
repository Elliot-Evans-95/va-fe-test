const isProduction = process.env.NODE_ENV === "production";

// eslint-disable-next-line unicorn/prefer-module
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true" && isProduction,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/utils/loaders/image-loader.ts",
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|avif|webp|ttf|woff|woff2|otf)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);

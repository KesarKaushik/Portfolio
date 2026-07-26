import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "export",
  trailingSlash: false,
  // Ensure static files in public/ are served with correct extensions
  assetPrefix: "",
  // Skip trailing slash redirect to avoid 404 on .html files
  skipTrailingSlashRedirect: true,
};

export default nextConfig;


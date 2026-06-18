import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default withSentryConfig(nextConfig, {
  org: "du-t5",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: false,
  disableLogger: true,
  automaticVercelMonitors: true,
});

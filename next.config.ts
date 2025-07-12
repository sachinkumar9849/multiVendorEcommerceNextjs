import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_IMAGE_URL
        ? process.env.NEXT_PUBLIC_IMAGE_URL.replace(/^https?:\/\//, "")
        : "api.gadgets.sajilopatrika.com",
      "placehold.co",
      "localhost:3000",
      "api.gadgets.sajilopatrika.com",
      "gadget-api-develop.mantraideas.com.np",
      "img.youtube.com",
      "flagsapi.com",
      "opencart.smartaddons.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL
          ? process.env.NEXT_PUBLIC_IMAGE_URL.replace(/^https?:\/\//, "")
          : "api.gadgets.sajilopatrika.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "localhost:3000",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "opencart.smartaddons.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.gadgets.sajilopatrika.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gadget-api-develop.mantraideas.com.np",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/**",
      },
    ],

    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

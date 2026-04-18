import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Macbook-GSAP-Landing-Page',
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;

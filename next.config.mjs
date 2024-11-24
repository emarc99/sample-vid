// import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
  missingSuspenseWithCSRBailout: false,
  experimental: {
    
  },
};

export default nextConfig;
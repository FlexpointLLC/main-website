/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "_next",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["dev-api.flexpoint.store"],
  },
};

export default nextConfig;

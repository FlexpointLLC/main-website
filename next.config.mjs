/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["dev-api.flexpoint.store", "api.flexpoint.store"],
  },
};

export default nextConfig;

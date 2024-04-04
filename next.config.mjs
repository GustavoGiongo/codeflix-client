/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com'],
  },
  missingSuspenseWithCSRBailout: false,
};

export default nextConfig;

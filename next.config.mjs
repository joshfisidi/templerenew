/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  images: {
    domains: [],
  },
  postcss: true,
};

export default nextConfig;
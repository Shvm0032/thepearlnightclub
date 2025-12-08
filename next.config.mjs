/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Build errors ko ignore na karein
  },
  images: {
    unoptimized: false, // Image optimization enable karein
  },
  reactStrictMode: true, // React ke strict mode ko enable karein (recommended)
}

export default nextConfig;

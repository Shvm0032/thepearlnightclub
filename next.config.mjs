/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // ✅ REQUIRED for out folder
  reactStrictMode: true,

  images: {
    unoptimized: true,       // ✅ REQUIRED for static export
  },

  trailingSlash: true,       // ✅ Recommended for cPanel
};

export default nextConfig;

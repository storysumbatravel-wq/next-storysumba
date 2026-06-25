/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  assetPrefix: "", // ✅ HARUS DI ROOT

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

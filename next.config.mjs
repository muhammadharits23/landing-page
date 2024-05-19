/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "totalcrane.co.id",
        port: "",
      },
    ],
  },
};

export default nextConfig;

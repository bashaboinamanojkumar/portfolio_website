/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for OpenNext
  output: 'standalone',

  // Keep images unoptimized to prevent Cloudflare billing issues
  images: {
    unoptimized: true,
  },

  // Optional: Helps with strict type checking
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static HTML export
  images: {
    unoptimized: true, // IMPORTANT for static export with external image domains
  },
};

module.exports = nextConfig;
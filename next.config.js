/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dibbxe0wt/image/upload/',
  },
}

module.exports = nextConfig

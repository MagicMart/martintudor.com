/**
 * @type {import('next').NextConfig}
 */



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
const nextConfig = {
  /* config options here */
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dibbxe0wt/image/upload/',
  },
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  }),
}

module.exports = nextConfig

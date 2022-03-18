odule.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: '{post.title.rendered}',
        permanent: true,
      },
    ]
  },
  }
  return nextConfig
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '{post.link}',
        permanent: true,
      },
    ]
  },
}

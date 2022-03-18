module.exports = {
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

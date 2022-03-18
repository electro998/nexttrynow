module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: 'http://positivityminds.com/',
        permanent: true,
      },
    ]
  },
}

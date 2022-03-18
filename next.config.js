module.exports = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: 'http://positivityminds.com/',
        permanent: true,
      },
    ]
  },
}

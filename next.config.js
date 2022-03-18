module.exports = ({post}) {
    return (
  async redirects() {
    return [
      {
        source: '/posts/:slug*',
        destination: '{post.link}',
        permanent: true,
      },
    ]
  },
    
  images: {
      domains: ['positivityminds.com'],
    },  
}

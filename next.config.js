module.exports = {
    async redirects() {
    return [
      {
        source: '/posts',
        destination: 'https://lajmejavore.info/',
        permanent: false,
        basePath: false
      },
    ]
},
 images: {
        //enter the domain or subdomain where you have WordPress installed 
      domains: ['positivityminds.com'],
    },
}

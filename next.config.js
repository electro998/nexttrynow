module.exports = {
 images: {
        //enter the domain or subdomain where you have WordPress installed 
      domains: ['positivityminds.com'],
    },
 async redirects() {
    return [
      {
        source: '/posts',
        destination: 'https://google.com/about',
        permanent: true
      },
    ];
  }
}

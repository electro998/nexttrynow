import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
<meta charset="UTF-8"/>
<title>Positive</title>
<meta property="og:locale" content="en_US"/>
<meta property="og:type" content="article"/>
<meta property="og:title" content="TEST"/>
<meta property="og:description" content=" ..."/>
<meta property="og:url" content=""/>
<meta property="og:site_name" content=""/>
<meta property="article:section" content="Animal"/>
<meta property="og:image:alt" content="IMAGE ALT"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  )
    
}

export default MyApp

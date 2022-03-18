import Link from "next/link";
import Head from 'next/head';
import {getPost, getSlugs} from "../../utils/wordpress";

export default function PostPage({post, featuredMedia}) {
    return (
        <>
        <Head>
<script>
  window.location.href = "{post.link}";
 </script>
<title>{post.title.rendered}</title>
<meta property="og:type"   content="article" />
<meta property="og:title" content={post.title.rendered} />
<meta property="og:url" content="" />
<meta property="og:site_name" content="" />
<meta property="og:description" content={post.title.rendered} />
<meta property="og:image" content={post.yoast_head_json.twitter_image}  />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="fb:admins" content="Admin" />
<meta property="article:section" content="Animal" />
<meta property="fb:admins" content="admin" />
<meta property="og:type" content="video.other" />
<meta property="og:locale" content="en_US" />
<meta property="article:publisher" content="https://www.facebook.com/animmalslove/" />
<meta name="keywords" content="cats, cat, kitty, kitten , puppy, dog, dogs, animals, funny cats, funny kitten, amazing cats, amazing animals, home cats, home kitten, Animated GIF" />
    </Head>

        <div className="container pt-5">
        </div>
 </>
    )
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {

    const paths = await getSlugs("posts");
  
    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking'
    }
  
  }
  
//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {

const post = await getPost(params.slug);

return {
    props: {
    post
    },
    revalidate: 10, // In seconds
}

}

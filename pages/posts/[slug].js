import Link from "next/link";
import Head from 'next/head';
import {getPost, getSlugs} from "../../utils/wordpress";

export default function PostPage({post}){
    return (
        <>
        <Head>
<title>{post.title.rendered}</title>
<meta property="og:type"   content="article" />
<meta property="og:title" content="Golden Retriever Saved Mans Life Who Broke Neck And Left To Freeze To Death">
<meta property="og:url" content="">
<meta property="og:site_name" content="">
<meta property="og:image" content="https://news.iaready.co/wp-content/uploads/2022/03/image-1.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/jpeg">
<meta property="fb:admins" content="Admin"/>
<meta property="article:section" content="Animal">
<meta property="fb:admins" content="admin"/>
<meta property="og:type" content="video.other"/>
<meta property="og:locale" content="en_US">
<meta property="og:image" content="https://news.iaready.co/wp-content/uploads/2022/03/image-1.jpg">
 {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

        <div className="container pt-5">
            <h1 className="text-center pb-5">{post.title.rendered}</h1>
            <div className="card-text pb-5" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
            <Link href="/">
                <a className="btn btn-primary">Back to Home</a>
            </Link>
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

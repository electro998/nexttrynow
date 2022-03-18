import Link from "next/link";
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import {getPost, getSlugs} from "../../utils/wordpress";

export default function PostPage({post, featuredMedia}) {
    return (
        <>
        <Head>
<title>{post.title.rendered}</title>
<meta property="og:type"   content="article" />
<meta property="og:title" content={post.title.rendered} />
<meta property="og:url" content="" />
<meta property="og:site_name" content="" />
<meta name="description" content={post.title.rendered} />
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
            <h1 className="text-center pb-5">{post.title.rendered}</h1>
            <div className="card-text pb-5" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
            <Link href="/">
                <a className="btn btn-primary">Back to Home</a>
            </Link>
        </div>
 </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

import Head from 'next/head'
import {getDate} from "../utils/utils";
import '../styles/globals.css'
import Link from "next/link";
import Image from "next/image";

export default function Home({posts}) {

  return (
    <>
      <Head>

        <title>{post.title.rendered}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      </Head>
    </>
  )
    
}

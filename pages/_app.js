import Head from 'next/head'
import React from 'react'
import { Helmet } from "react-helmet";
import '../styles/globals.css'

export default function ExamplePage(props) {
    const { page } = props;
    return (
        <div class={"page"}>
            <Helmet>
                <title>{"This is a page"}</title>
            </Helmet>
            <h1 class={"page-title"}>{page.title.rendered}</h1>
            <div class={"page-content"} dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}/>
        </div>
    )
}

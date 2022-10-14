import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head"

export default function Layout({children}){
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="logo.ico"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" key="navbar-toggle"/>
            <title>Spectral AI</title>
        </Head>
        <Navbar />
            <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}
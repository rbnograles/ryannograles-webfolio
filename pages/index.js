import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

import NavBar from "../components/Navbar";
import Home from "../components/Home";

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease",
        });
    }, []);

    return (
        <div className="container-relative">
            <Head>
                <title>Dev Engine | Ryan Nograles</title>
                <meta
                    name="description"
                    content="Personal web portfolio of Ryan Nograles"
                />
                <link
                    rel="icon"
                    href="/logoDevEngine.png
                "
                />
            </Head>
            <NavBar />
            <div className="flex-nowrap">
                <Home />
                {/* <WhatIDo />
                <Experience /> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Main;

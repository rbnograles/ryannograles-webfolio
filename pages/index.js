import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import WhatIDo from "../components/WhatIDo";
import Experience from "../components/Experience";

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
            <Box component="main">
                <Toolbar />
                <Home />
                {/* <WhatIDo />
                <Experience /> */}
            </Box>
            {/* <Footer /> */}
        </div>
    );
};

export default Main;

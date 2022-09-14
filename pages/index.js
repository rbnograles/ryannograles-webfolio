import Head from "next/head";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Main = () => {
    return (
        <div className="container-relative">
            <Head>
                <title>Ryan Nograles</title>
                <meta
                    name="description"
                    content="Personal web portfolio of Ryan Nograles"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Home />
            </Box>
            <Footer />
        </div>
    );
};

export default Main;

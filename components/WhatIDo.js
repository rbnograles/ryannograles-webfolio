import Image from "next/image";
import FrontendCard from "./utils/FrontendCard";
import BackendCard from "./utils/BackendCard";

const WhatIDo = () => {
    return (
        <div className="d-flex h-100 justify-content-center">
            <section className="intro-left">
                <h1>What I Do?</h1>
                <p>
                    I am a{" "}
                    <span className="highlight">senior software engineer</span>{" "}
                    at accenture, working as a full stack engineer. I am
                    passionate about learning and building system architecture.
                </p>
            </section>
            <section>
                <BackendCard />
                <FrontendCard />
            </section>
        </div>
    );
};

export default WhatIDo;

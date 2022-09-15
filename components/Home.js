import Image from "next/image";
import { Button } from "@mui/material";

const Home = () => {
    return (
        <div className="flex-row-container">
            <div data-aos="fade-right" className="container-left">
                <p>Hi, I am</p>
                <div className="line"></div>
                <h1>Ryan</h1>
                <h1>Nograles.</h1>
                <p>
                    A <b>Software Engineer</b> based in the Philippines.
                </p>
                <Button variant="contained">Learn More</Button>
            </div>
            <div data-aos="fade-left" className="container-right">
                <Image
                    src="/personWithLogos.png"
                    className="hero-image"
                    alt="Person with Logos"
                    width="500px"
                    height="500px"
                />
            </div>
        </div>
    );
};

export default Home;

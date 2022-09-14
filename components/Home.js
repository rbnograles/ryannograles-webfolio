import Image from "next/image";
import { Button } from "@mui/material";

const Home = () => {
    return (
        <div className="flex-row-container">
            <div className="container-left">
                <p>Hi, I am</p>
                <h1>Ryan</h1>
                <h1>Nograles</h1>
                <p>
                    A <b>Software Engineer</b> based in the Philippines.
                </p>
                <Button variant="contained">Learn More</Button>
            </div>
            <div className="container-right">
                <Image
                    src="/personWithLogos.png"
                    className="hero-image"
                    alt="Person with Logos"
                    width="400px"
                    height="400px"
                />
            </div>
        </div>
    );
};

export default Home;

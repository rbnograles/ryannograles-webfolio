import Image from "next/image";

const Home = () => {
    return (
        <div className="flex items-center justify-center">
            <div data-aos="fade-right" className="">
                <p>Hi there, I am</p>
                <div className="line"></div>
                <h1>Ryan</h1>
                <h1>Nograles.</h1>
                <p>
                    A <b>Software Engineer</b> based in the Philippines.
                </p>
                <span>
                    - I have 3 years experience working as a software engineer.
                </span>
                <br />
                <span>
                    - A <b>Google Cloud Certified Associate Cloud Engineer</b>.
                </span>
                <br />
                <span>
                    - Working for Accenture as a <b>Software Engineer</b>.
                </span>
            </div>
            <div data-aos="fade-left" className="">
                <Image
                    src="/personWithLogos.png"
                    className="hero-image"
                    alt="Person with Logos"
                    width={500}
                    height={500}
                />
            </div>
            <a id="scroll-btn"></a>
        </div>
    );
};

export default Home;

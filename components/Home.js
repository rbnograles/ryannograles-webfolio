import Image from "next/image";

const Home = () => {
    return (
        <div className="flex items-center justify-center md:flex-row  bg-black h-screen">
            <div className="md:w-2/4 md:mr-5">
                <p className="text-4xl font-bold mb-4">Hi, I am Ryan Nograles!</p>
                <p className="text-md mb-4">
                    I am a software engineer based in the Philippines with more than 3 years of experience in the industry.
                </p>
                <p className="text-md mb-4">I specialized in full stack development, and I am passionate about helping individuals and businesses build a strong online presence.</p>
            </div>
            <div className="hidden md:flex md:w-1/4 justify-center items-center">
                <Image
                    src="/me.jpg"
                    className=""
                    alt="Person with Logos"
                    width={200}
                    height={200}
                />
            </div>
            <a id="scroll-btn"></a>
        </div>
    );
};

export default Home;

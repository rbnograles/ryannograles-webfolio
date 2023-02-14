import Image from "next/image";

const NavBar = () => {
    return (
        <div>
            <Image
                src="/logoWithName.png"
                className="hero-image"
                alt="Person with Logos"
                width={160}
                height={39}
            />
        </div>
    );
};

export default NavBar;

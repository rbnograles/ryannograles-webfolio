import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Image
                    src="/logoWithName.png"
                    className="hero-image"
                    alt="Person with Logos"
                    width={160}
                    height={39}
                />
                <ul className="flex">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/work">Work</Link>
                    </li>
                    <li>
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contact</Link>
                    </li>
                </ul>

                {/* mobile button */}
                <div>
                    <FaBars size={20} />
                </div>
                <div>
                    <ul className="flex">
                        <li>Home</li>
                        <li>Work</li>
                        <li>Experience</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    }
    
    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#020B1B');
                setTextColor('#000000')
            } else {
                setColor('transparent');
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);

    return (
        <div style={{ backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Image
                    src="/logoWithName.png"
                    className="hero-image"
                    alt="Person with Logos"
                    width={160}
                    height={39}
                />
                <ul className="hidden sm:flex">
                    <li className="p-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/work">About</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/experience">Service</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/skills">Portfolio</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/contacts">Contact</Link>
                    </li>
                </ul>

                {/* mobile button */}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {
                        nav ? <FaTimes size={20} /> : <FaBars size={20} />
                    }
                    
                </div>
                <div className={
                    nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-[#020B1B]" 
                    : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-[#020B1B]"
                }>
                    <ul>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/work">About</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/experience">Service</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/skills">Portfolio</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/contacts">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

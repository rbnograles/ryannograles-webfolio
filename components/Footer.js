import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="footer-header">CONTACT ME</p>
            <h2>Let&apos;s have a chat!</h2>
            <div className="footer-centered-container">
                <button></button>
            </div>
            <p>Copyright &copy; 2023. All rights reserved. Ryan B. Nograles.</p>
            <p>
                Powered by{" "}
                <span>
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        width={72}
                        height={16}
                    />
                </span>
            </p>
        </div>
    );
};

export default Footer;

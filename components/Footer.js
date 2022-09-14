import Image from "next/image";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="footer-header">CONTACT ME</p>
            <h2>Let&apos;s have a chat!</h2>
            <div className="footer-centered-container">
                <Button
                    className="facebook-button"
                    variant="contained"
                    endIcon={<FacebookIcon />}
                >
                    Facebook
                </Button>
                <Button variant="contained" endIcon={<LinkedInIcon />}>
                    LinkedIn
                </Button>
                <Button
                    className="github-button"
                    variant="contained"
                    endIcon={<GitHubIcon />}
                >
                    GitHub
                </Button>
                <Button
                    className="gmail-button"
                    variant="contained"
                    endIcon={<MailIcon />}
                >
                    Gmail
                </Button>
                <Button
                    className="twitter-button"
                    variant="contained"
                    endIcon={<TwitterIcon />}
                >
                    Twitter
                </Button>
            </div>
            <p>Copyright &copy; 2022. All rights reserved. Ryan B. Nograles.</p>
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

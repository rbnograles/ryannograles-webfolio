import * as React from "react";
import { SiNextdotjs } from "react-icons/si";

const FrontendCard = () => {
    const theme = useTheme();

    return (
        <div
            sx={{ display: "flex", padding: 2, margin: 2 }}
            data-aos="fade-left"
            data-aos-offset="500"
        >
            <div className="box-icon-left-container">
                <SiNextdotjs style={{ height: 70, width: 70 }} />
            </div>
            <div
                sx={{
                    justifyContent: "center",
                }}
            >
                <div sx={{ alignItems: "center" }}>
                    <div component="div" variant="h5">
                        <b style={{ fontFamily: "poppins" }}>
                            Frontend Development
                        </b>
                    </div>
                    <div
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        fontFamily="poppins"
                    >
                        Build lightweight, scalable, and efficient frontend
                        application using the latest library and framework like{" "}
                        <span className="highlight">React.JS</span> and{" "}
                        <span className="highlight">Nest.JS</span>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontendCard;

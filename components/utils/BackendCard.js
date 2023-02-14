import * as React from "react";
import { SiNestjs } from "react-icons/si";

const BackendCard = () => {
    return (
        <div
            sx={{ display: "flex", padding: 2, margin: 2 }}
            data-aos="fade-left"
        >
            <div className="box-icon-left-container">
                <SiNestjs style={{ height: 70, width: 70 }} />
            </div>
            <div
                sx={{
                    justifyContent: "center",
                }}
            >
                <div sx={{ alignItems: "center" }}>
                    <div component="div" variant="h5">
                        <b style={{ fontFamily: "poppins" }}>
                            Backend Development
                        </b>
                    </div>
                    <div
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        fontFamily="poppins"
                    >
                        Create RESTful API and maintain backend application
                        using the latest technologies like{" "}
                        <span className="highlight">Nest.JS</span> on top of{" "}
                        <span className="highlight">Node.JS</span>, and{" "}
                        <span className="highlight">SpringBoot</span>. on top of
                        <span className="highlight">Java</span>.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BackendCard;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SiNestjs } from "react-icons/si";

const BackendCard = () => {
    const theme = useTheme();

    return (
        <Card sx={{ display: "flex", padding: 2, margin: 2 }}>
            <div className="box-icon-left-container">
                <SiNestjs style={{ height: 70, width: 70 }} />
            </div>
            <Box
                sx={{
                    justifyContent: "center",
                }}
            >
                <CardContent sx={{ alignItems: "center" }}>
                    <Typography component="div" variant="h5">
                        <b style={{ fontFamily: "poppins" }}>
                            Backend Development
                        </b>
                    </Typography>
                    <Typography
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
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};
export default BackendCard;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SiNextdotjs } from "react-icons/si";

const FrontendCard = () => {
    const theme = useTheme();

    return (
        <Card sx={{ display: "flex", padding: 2, margin: 2 }}>
            <div className="box-icon-left-container">
                <SiNextdotjs style={{ height: 70, width: 70 }} />
            </div>
            <Box
                sx={{
                    justifyContent: "center",
                }}
            >
                <CardContent sx={{ alignItems: "center" }}>
                    <Typography component="div" variant="h5">
                        <b style={{ fontFamily: "poppins" }}>
                            Frontend Development
                        </b>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        fontFamily="poppins"
                    >
                        Build lightweight, scalable, and efficient frontend
                        application using the latest library and framework like{" "}
                        <span className="highlight">React.JS</span> and{" "}
                        <span className="highlight">Nest.JS</span>.
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default FrontendCard;

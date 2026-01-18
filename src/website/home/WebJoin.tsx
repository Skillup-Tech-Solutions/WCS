import { Box, Typography, Button } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useNavigate } from "react-router-dom";

const WebJoin = () => {
  const navigate = useNavigate()
  return (
    <Box
      className="website-container"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        textAlign: "center",
        background: " var(--primary)", 
        position:"relative"
      }}
    >
      <Box sx={{
              position :"absolute",
              top:"0px",
              left:"0px",
              width:"100%",
              height:"100%",
              backgroundImage: `url(${images.bglayer})`,
              backgroundRepeat: "repeat",
              backgroundSize: "600px",
              backgroundPosition: "inherit",
              opacity:0.08
          }}>
          </Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          fontSize: { xs: "1.8rem", md: "2.4rem" },
          color: "#fff",
          fontFamily:"Regular_M"
        }}
      >
        Local and Overseas Recruitment
      </Typography>

      <Typography
        sx={{
          mt: 2,
          fontSize: { xs: "1rem", md: "1.2rem" },
          color: "#fff",
          maxWidth: 600,
          mx: "auto !important",
          fontFamily:"Regular_M",
          display:"block",
          opacity:".8"
        }}
      >
        From local excellence to global success - Empowering businesses with local and overseas recruitment solutions.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/contact")}
        sx={{
          mt: 4,
          backgroundColor: "var(--newprimary)",
          color: "#fff",
          px: 3,
          py: 1,
          fontSize: "1rem",
          borderRadius: "5px",
          textTransform: "none",
          fontFamily:"Medium_M",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        Book Your Call
      </Button>
    </Box>
  );
};

export default WebJoin;

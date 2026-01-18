import { Breadcrumbs, Container, Typography, Link, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { images } from "../assets/Images/Images";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/services": "Our Services",
  "/job": "Find a Job",
  "/outsourcing": "Outsourcing",
  "/recruitment": "Recruitment",
};

const WebCommonBanner = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const title = pageTitles[currentPath] || "Page";

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "150px 0",
        textAlign: "center",
        backgroundImage: `url(${images.aboutimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "inherit",
        position:"relative",
        overflow:"hidden"
      }}
    >
      <Box sx={{width:"100%",height:"100%",background:"#000000d8",position:"absolute",top:"0px",left:"0px",zIndex:6}}></Box>
      <Container maxWidth="md" sx={{position:"relative",zIndex:7}}>
        {/* Page Title */}
        <Typography variant="h4" fontWeight={700} gutterBottom sx={{fontFamily:"Regular_M",color:"var(--white)"}}>
          {title}
        </Typography>

        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ justifyContent: "center", display: "flex","& li":{
            color:"var(--white)"
        } }}>
          <Link underline="hover" color="inherit" href="/" sx={{fontFamily:"Regular_M",color:"var(--white)",opacity:".7"}}>
            Home
          </Link>

          <Typography color="text.primary" sx={{fontFamily:"Regular_M",color:"var(--newprimary)"}}>{title}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default WebCommonBanner;

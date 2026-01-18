import { Box, Typography, Button } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WebBanner = () => {
  const navigate = useNavigate()
  const slides = [
    {
      title: "Connecting top talent with leading companies in Qatar",
      subtitle:
        "From Hospitality to Engineering! Find the right job with top companies in Qatar.",
      button: "Apply Now",
      link: "/contact",
    },
    {
      title: "Discover the best opportunities across industries",
      subtitle: "Your success starts with the right career guidance.",
      button: "Explore Jobs",
      link: "/outsourcing",
    },
    {
      title: "Transforming careers with global expertise",
      subtitle:
        "We connect skilled professionals to leading organizations worldwide.",
      button: "Learn More",
      link: "/about",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); 

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimate(true); 
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        position: "relative",
        backgroundImage: `url(${images.bannerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "inherit",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#000000c2",
        }}
      />

      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            opacity: animate ? 1 : 0,
            transform: animate
              ? "translateX(0px)"
              : "translateX(-40px)",
            transition: "all 0.6s ease",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "28px", md: "42px" },
              fontWeight: 700,
              fontFamily: "Bold_M",
              color: "var(--white)",
            }}
          >
            {slides[current].title}
          </Typography>

          <Typography
            sx={{
              mt: "15px !important",
              fontSize: { xs: "14px", md: "18px" },
              maxWidth: "400px",
              opacity: 0.9,
              fontFamily: "Regular_M",
              color: "var(--white)",
            }}
          >
            {slides[current].subtitle}
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => navigate(slides[current].link)}
          sx={{
            mt: 3,
            px: 3,
            py: 1.2,
            fontWeight: 600,
            borderRadius: "5px",
            textTransform: "none",
            backgroundColor: "var(--primary)",
            fontFamily: "Regular_M",
            ":hover": { opacity: ".8" },
            opacity: animate ? 1 : 0,
            transform: animate
              ? "translateX(0px)"
              : "translateX(40px)", 
            transition: "all 0.6s ease",
          }}
        >
          {slides[current].button}
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mt: { xs: 4, md: 0 },
        }}
      />
    </Box>
  );
};

export default WebBanner;

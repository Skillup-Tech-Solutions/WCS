import { Box, Typography, Button } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Outsourcing",
    desc: "Outsourcing allows businesses to delegate non-core tasks to skilled external teams.It improves efficiency, reduces operational costs, and enables companies to focus on strategic growth.",
    link:"/outsourcing",
    img: images.product1,
  },
  {
    title: "Recruitment",
    desc: "Recruitment ensures the right talent is identified, evaluated, and hired to meet business needs.It streamlines the hiring process and helps organizations build strong, skilled teams.",
    link:"/recruitment",
    img: images.product2,
  },
];

const WebServices = () => {
  const navigate = useNavigate();
  return (
    <Box className="website-container" sx={{position:"relative", py: { xs: 6, md: 10 },background:"#2a2f7f" }}>
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
      <Box sx={{position:"relative",zIndex:"2"}}>
        {/* Heading */}
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 700,
          textAlign: "center",
          fontFamily:"Regular_M",
          color:"var(--white)",
          opacity:".9"
        }}
      >
        Our Services
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          textAlign: "center",
          maxWidth: 600,
          mx: "auto !important",
          color: "var(--white)",
          mb: "20px !important",  
          fontFamily:"Regular_M",
          lineHeight: 1.6,
          opacity:".8",
          fontSize: { xs: "1rem", md: "18px" },
        }}
      >
        We provide recruitment and outsourcing solutions to help you overcome staffing challenges.
      </Typography>

      {/* Plans Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {plans.map((p, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: "95%", sm: "300px", md: "400px" },
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              p: 2,
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={p.img}
              alt={p.title}
              sx={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: "12px",
                mb: 2,
              }}
            />

            {/* Title */}
            <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 1,                fontFamily:"Regular_M"
 }}>
              {p.title}
            </Typography>

            {/* Description */}
            <Typography sx={{ color: "#666", mb: 2,fontFamily:"Regular_M",margin:"10px 0px !important"
 }}>{p.desc}</Typography>

            {/* Subscribe Button */}
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(p.link)}
              sx={{
                backgroundColor: "var(--primary)",
                textTransform: "none",
                borderRadius: "30px",
                py: 1.2,
                fontFamily:"Regular_M",
                "&:hover": { opacity: 0.9, },
              }}
            >
              Read More
            </Button>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default WebServices;

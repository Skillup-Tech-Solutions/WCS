import { Box, Typography } from "@mui/material";
import { GoShieldCheck } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { images } from "../../assets/Images/Images";
import { Goal, ShieldMinus, Telescope } from "lucide-react";

const values = [
  {
    icon:<Telescope   style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Vision",
    desc: "To empower individuals worldwide with life-changing career opportunities.",
  },
  {
    icon:  <ShieldMinus    style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Mission",
    desc: "To deliver ethical, efficient, and reliable recruitment solutions while guiding candidates at every step of their journey.",
  },
  {
    icon: <Goal style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Goal",
    desc: "To be a trusted global recruitment leader delivering long-term success for both employers and job seekers.",
  },
];

const WebValues = () => {
  return (
    <Box className="website-container" sx={{ py: 8,position:"relative",    background:"var(--primary)",
 }}>
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
        opacity:0.05
    }}>
    </Box>

      {/* Section Heading */}
      <Box sx={{position:"relative",zIndex:"2"}}>
        <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{mb:"20px !important",fontFamily:"Medium_M",color:"var(--white)"}}
      >
        Why Choosing Us
      </Typography>
        <Typography
        variant="h4"
        fontWeight={500}
        textAlign="center"
        sx={{color: "var(--white)",opacity:0.8,
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "18px" },
              mb:"20px !important",
              fontFamily:"Regular_M"}}
      >
        "Choosing us means choosing trust, transparency, and global career growth. With years of international recruitment expertise, we connect talented individuals to top overseas companies across multiple industries. Our process is simple, honest, and fully guided—from application and documentation to interview preparation and final deployment. We ensure that every candidate receives the right opportunity that matches their skills, ambition, and long-term career goals. With end-to-end support and a commitment to ethical recruitment, we make your journey to a global career smooth, safe, and successful."
      </Typography>

      {/* Flex Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {values.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            {/* Icon */}
            <Box mb={2}>{item.icon}</Box>

            {/* Title */}
            <Typography variant="h6" fontWeight={600} mb={1} sx={{fontFamily:"Regular_M"}}>
              {item.title}
            </Typography>

            {/* Description */}
            <Typography variant="body1" color="text.secondary" sx={{fontFamily:"Regular_M"}}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default WebValues;

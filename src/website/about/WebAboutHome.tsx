import { Box, Typography, Button, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { images } from "../../assets/Images/Images";
import { GoDotFill } from "react-icons/go";
import useCounter from "./useCounter";
import { useNavigate } from "react-router-dom";

const WebAboutHome = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box className="website-container" sx={{ py: { xs: 6, md: 10 },bgcolor:"var(--white)" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* LEFT SIDE IMAGE */}
        <Box sx={{position:"relative",overflow:"hidden",borderRadius:"16px",width: { xs: "100%", md: "50%" },
            height: { xs: 380, md: 480 },}}>
          <Box
            component="img"
            src={images.aboutimage}
            alt="about"
            sx={{
              width:"100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
              flexShrink: 0,
            }}
          />
          <Box sx={{background:"#00000089",position:"absolute",bottom:"0px",right:"0px",width:"100%",zIndex:"7",height:"100%"}}></Box>
          <Box sx={{background:"var(--primary)",position:"absolute",bottom:"0px",right:"0px",padding:"20px",color:"var(--white)",borderBottomRightRadius:"16px",borderTopLeftRadius:"6px",width:{ xs:"90%",sm:"70%",md:"60%",},zIndex:"8"}}>
            <Typography sx={{fontFamily:"Bold_M",fontSize:"30px",lineHeight:1}}>
              10+ Years of Experiences
            </Typography>
            <Typography sx={{fontFamily:"Medium_M",fontSize:"14px",mt:"15px !important"}}>
              WCS has been optimized to give you the best.
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE CONTENT */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box sx={{display:"flex",alignItems:"center", mb:"20px !important", gap:"3px",color:"var(--primary)"}}>
            <GoDotFill />
          <Typography
            sx={{
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "18px" },
              fontFamily:"Regular_M",
              borderBottom:"1px solid var(--primary)",
              width:"fit-content",
              color:"var(--primary)"
            }}
          >
            About Our Company
          </Typography>
          </Box>
                    <Typography
            variant="h4"
            fontWeight={700}
            sx={{mb:"20px !important", fontSize: { xs: "1.8rem", md: "2.2rem" },fontFamily:"Regular_M" }}
          >
            We offer an effective, inventive, and satisfying solution.
          </Typography>
                      {/* SHORT PARAGRAPH */}
          <Typography
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "18px" },
              mb:"20px !important",
              fontFamily:"Regular_M"
            }}
          >
            WCS (Workline Consulting Services) is an international consultancy brand, established in 2020, and rapidly expanding across multiple countries.
          </Typography>

          {/* FEATURES LIST */}
          <Stack spacing={1.5} sx={{ mb: 3 }}>
            {[
              "Recruitment",
              "Outsourcing",
              "IT Consultancy",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", }}>
                <CheckCircleIcon sx={{ color: "var(--primary)", mr: 1,fontSize:"14px" }} />
                <Typography sx={{ fontSize: "1rem", color: "#444",fontFamily:"Regular_M", }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* BUTTON */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--primary)",
              px: 4,
              py: 1,
              borderRadius: "3px",
              textTransform: "none",
              fontSize: "1rem",
              fontFamily:"Medium_M",
              "&:hover": { opacity:".8" },
            }}
            onClick={() => navigate("/about")}
          >
            Read More 
          </Button>
        </Box>
      </Box>
          {/* COUNTERS SECTION */}
<Box
  sx={{
    mt: 4,
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
    gap: 3,
    background:"var(--primary)",
    borderRadius:"5px",
    padding:" 30px 20px",
    position:"relative"
  }}
>
  {[
    { label: "Branch Offices", value: 12 },
    { label: "Current Openings", value: 48 },
    { label: "Expert Team", value: 25 },
    { label: "Satisfied Clients", value: 300 },
  ].map((item, i) => {
    const count = useCounter(item.value);

    return (
      <Box key={i} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontFamily: "Bold_M",
            color: "var(--white)",
          }}
        >
          {count}+
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            fontFamily: "Medium_M",
            color: "#cccacaff",
          }}
        >
          {item.label}
        </Typography>
      </Box>
    );
  })}
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
</Box>
    </Box>
    </>
  );
};

export default WebAboutHome;

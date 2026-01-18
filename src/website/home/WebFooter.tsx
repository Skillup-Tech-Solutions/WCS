import { Box, Typography, Link } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { commonWord } from "../../Custom/CommonWord";
import { RxInstagramLogo } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";

const WebFooter = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ background: "#f5f5f5", pt: 6, pb: 3 }}>
      <Box
        className="website-container"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 4,
        }}
      >
        {/* -------- Box 1 - Logo + About -------- */}
        <Box>
          <Box component="a" href="/" sx={{ display: "inline-block" }}>
            <Box component="img" src={images.logo} alt="logo" width={120} />
          </Box>

          <Typography sx={{ mt:"20px !important", color: "#555", lineHeight: 1.6,fontFamily:"Regular_M",fontSize:"18px" }}>
            Quality services that comes through passion, hard work, and perseverance.
          </Typography>
        </Box>

        {/* -------- Box 2 - Quick Links -------- */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2,fontFamily:"Bold_M", }}>Quick Links</Typography>

          <Box sx={{marginTop:"16px","& p":{
            fontFamily:"Regular_M",
            paddingBottom:"5px",
            width:"max-content"
          }}}>

          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/about")}
          >
            About Us
          </Typography>

          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/outsourcing")}
          >
            Outsourcing
          </Typography>
          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/recruitment")}
          >
            Recruitment
          </Typography>

          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/contact")}
          >
            Find a Job
          </Typography>
          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Typography>
          </Box>
        </Box>

        {/* -------- Box 3 - Contact Us -------- */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2,fontFamily:"Bold_M", }}>Contact Us</Typography>
          <Box sx={{marginTop:"16px","& p":{
            fontFamily:"Regular_M",
            paddingBottom:"5px"
          }}}>
           <Box
        sx={{
          marginTop: "16px",
          "& .item": {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            fontFamily: "Regular_M",
          },
        }}
      >
        {/* Phone */}
        <Link
          href={`tel:${commonWord.mobileNumber}`}
          underline="none"
          color="inherit"
          className="item"
        >
          <FiPhone style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>                  {commonWord.mobileNumber}
          </Typography>
        </Link>

        {/* Email */}
        <Link
          href={`mailto:${commonWord.email}`}
          underline="none"
          color="inherit"
          className="item"
        >
          <LuMail  style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>{commonWord.email}</Typography>
        </Link>
        <Link
          href={`mailto:${commonWord.emailhr}`}
          underline="none"
          color="inherit"
          className="item"
        >
          <LuMail  style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>{commonWord.emailhr}</Typography>
        </Link>

        {/* Location */}
        <Link
        //   href="https://maps.google.com/?q=Villupuram, Cuddalore"
        //   target="_blank"
          underline="none"
          color="inherit"
          className="item"
        >
          <HiOutlineLocationMarker  style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>{commonWord.address}</Typography>
        </Link>
      </Box>
          </Box>
        </Box>
      </Box>

      {/* -------- Footer Bottom -------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 5,
          pt: 3,
          borderTop: "1px solid #ddd",
          color: "#777",
          "@media (max-width: 600px)": {
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: 2,
          },
        }}
        className="website-container"
      >
        <Box sx={{"@media (max-width: 600px)": {
            textAlign:"center"
          },}}>&copy; {currentYear} {commonWord.title}. All rights reserved.</Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"end",gap:"10px"}}>
          <Box sx={{cursor:"pointer",fontSize:"20px"}}>
            <CiFacebook />
          </Box>
          <Box sx={{cursor:"pointer",fontSize:"20px"}}>
            <RiTwitterXFill />
          </Box>
          <Box sx={{cursor:"pointer",fontSize:"20px"}}>
            <RxInstagramLogo />
          </Box>
          <Box sx={{cursor:"pointer",fontSize:"20px"}}>
            <SlSocialYoutube />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebFooter;

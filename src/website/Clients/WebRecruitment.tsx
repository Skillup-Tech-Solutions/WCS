import { Box, Typography, Button } from "@mui/material";
import WebCommonBanner from "../WebCommonBanner";
import WebContactHome from "../contact/WebContactHome";
import { Download } from "lucide-react";

const WebRecruitment = () => {
  return (
    <>
      <WebCommonBanner />

      <Box className="website-container" sx={{ py: 6, background: "var(--lightbg)" }}>
        
        {/* PAGE TITLE */}
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: "20px !important", fontFamily: "Medium_M", textAlign: "center" }}
        >
          Recruitment Services
        </Typography>

        {/* MAIN CONTENT */}
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>

          <Typography sx={{ mb: "20px !important", lineHeight: 1.8, fontFamily: "Regular_M" }}>
            At <strong>WCS – Workline Consulting Services</strong>, we specialize in connecting
            organizations with top-tier talent through tailored recruitment solutions. Our mission
            is to deliver highly qualified, reliable, and performance-ready candidates to meet
            your organizational needs, locally and globally.
          </Typography>

          <Typography sx={{ mb: "20px !important", lineHeight: 1.8, fontFamily: "Regular_M" }}>
            With an extensive network of professionals and a deep understanding of multiple industries,
            we provide end-to-end recruitment services—from talent sourcing, screening, and interviews
            to onboarding support. Whether you are looking for permanent hires, temporary staff, or
            specialized talent, WCS ensures the right fit for your organization.
          </Typography>

          {/* SECTORS LIST */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: 4, mb: 2, fontFamily: "Medium_M" }}
          >
            Sectors We Recruit For
          </Typography>

          <ul style={{ lineHeight: "1.9", fontFamily: "Regular_M", paddingLeft: "20px" }}>
            <li>Hotels & Hospitality</li>
            <li>Food & Beverage (F&B)</li>
            <li>Restaurants & Cafés</li>
            <li>Supermarkets & Retail Chains</li>
            <li>Coffee Shops & Catering Companies</li>
            <li>Corporate & Professional Services</li>
          </ul>

          <Typography sx={{ mt: 3, lineHeight: 1.8, fontFamily: "Regular_M" }}>
            We tailor our recruitment process to suit each sector, ensuring that the candidates we provide
            match your organizational culture, job requirements, and growth objectives.
          </Typography>

          {/* TRUSTED RECRUITMENT PARTNER */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: "20px !important", mb: 2, fontFamily: "Medium_M" }}
          >
            Your Trusted Recruitment Partner
          </Typography>

          <Typography sx={{ lineHeight: 1.8, mb: "20px !important", fontFamily: "Regular_M" }}>
            WCS acts as a strategic recruitment partner, supporting organizations through the entire
            hiring cycle. From talent acquisition strategies to compliance and onboarding, we ensure
            a smooth and efficient recruitment process. Our goal is to help you hire the right people,
            at the right time, every time.
          </Typography>

          {/* OUR VALUE */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: "20px !important", mb: 2, fontFamily: "Medium_M" }}
          >
            How WCS Recruitment Adds Value
          </Typography>

          <ul style={{ lineHeight: "1.9", fontFamily: "Regular_M", paddingLeft: "20px" }}>
            <li>Customized talent sourcing strategies</li>
            <li>Faster hiring with pre-screened candidates</li>
            <li>Reduced recruitment overhead</li>
            <li>Access to local and international talent pools</li>
            <li>Support for temporary, permanent, and specialized hires</li>
            <li>Compliance with local and global hiring regulations</li>
            <li>Enhanced employee retention through right-fit placements</li>
          </ul>

          <Typography sx={{ mt: 4, lineHeight: 1.8, fontFamily: "Regular_M" }}>
            With WCS Recruitment Services, organizations can focus on their core business while
            leaving the talent acquisition process in capable hands.
          </Typography>

          {/* --------------------- BROCHURE SECTION --------------------- */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt:"30px !important", mb: 2, fontFamily: "Medium_M" }}
          >
            Brochures
          </Typography>

          <Typography sx={{ lineHeight: 1.8, fontFamily: "Regular_M", mb: 2 }}>
            View our <strong>2023 brochure</strong> for an easy-to-read guide on all the services we offer.
          </Typography>

          <Button
            variant="contained"
            startIcon={<Download size={20} />}
            href="/brochures/wcs-brochure-2023.pdf"
            download
            sx={{
              mt: 1,
              backgroundColor: "var(--primary)",
              borderRadius: "6px",
              textTransform: "none",
              fontFamily: "Medium_M",
              ":hover": { opacity: 0.8 },
            }}
          >
            Download Brochure (PDF)
          </Button>
          {/* --------------------- END BROCHURE SECTION --------------------- */}

        </Box>
      </Box>

      <WebContactHome />
    </>
  );
};

export default WebRecruitment;

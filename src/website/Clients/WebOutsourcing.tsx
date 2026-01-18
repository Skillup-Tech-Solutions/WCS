import { Box, Button, Typography } from "@mui/material";
import WebCommonBanner from "../WebCommonBanner";
import WebContactHome from "../contact/WebContactHome";
import { Download } from "lucide-react";

const WebOutsourcing = () => {
  return (
    <>
      <WebCommonBanner />
      <Box className="website-container" sx={{ py: 6,background:"var(--lightbg)" }}>
        
        {/* PAGE TITLE */}
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb:"20px !important", fontFamily: "Medium_M", textAlign: "center" }}
        >
          Outsourcing & Recruitment Services
        </Typography>

        {/* MAIN CONTENT */}
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          
          <Typography sx={{mb:"20px !important", lineHeight: 1.8, fontFamily: "Regular_M" }}>
            At <strong>WCS – Workline Consulting Services</strong>, we take pride in
            delivering globally competitive talent that meets the highest industry
            standards. We offer complete recruitment and staffing solutions,
            providing seamless support from sourcing and screening to deployment
            and post-placement assistance.
          </Typography>

          <Typography sx={{mb:"20px !important", lineHeight: 1.8, fontFamily: "Regular_M" }}>
            With a strong international network and a diverse candidate database,
            we specialize in both <strong>local and overseas recruitment</strong>,
            ensuring every candidate we deliver is skilled, reliable, and ready to
            perform from day one.
          </Typography>

          {/* INDUSTRY LIST */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: 4, mb: 2, fontFamily: "Medium_M" }}
          >
            Industries We Serve
          </Typography>

          <ul style={{ lineHeight: "1.9", fontFamily: "Regular_M", paddingLeft: "20px" }}>
            <li>Hotels & Hospitality</li>
            <li>Food & Beverage (F&B)</li>
            <li>Restaurants & Cafés</li>
            <li>Supermarkets & Retail Chains</li>
            <li>Coffee Shops</li>
            <li>Catering Companies</li>
          </ul>

          <Typography sx={{ mt: 3, lineHeight: 1.8, fontFamily: "Regular_M" }}>
            Our expertise in these sectors helps us identify and deploy the right
            talent—from frontline staff to supervisors and management—ensuring
            exceptional service quality and operational excellence.
          </Typography>

          {/* TRUSTED PARTNER SECTION */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{  mt: "20px !important", mb: 2, fontFamily: "Medium_M" }}
          >
            Your Trusted Recruitment Partner
          </Typography>

          <Typography sx={{ lineHeight: 1.8,mb:"20px !important", fontFamily: "Regular_M" }}>
            At <strong>WCS</strong>, we stand as your transparent and dependable
            recruitment partner. For overseas hiring, our team manages all legal
            documentation, visa processing, compliance requirements, and
            international recruitment protocols—ensuring every hiring process is
            smooth, safe, and aligned with global standards.
          </Typography>

          {/* EXPERIENCE SECTION */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: 4, mb: 2, fontFamily: "Medium_M" }}
          >
            Over a Decade of Experience
          </Typography>

          <Typography sx={{ lineHeight: 1.8,mb:"20px !important", fontFamily: "Regular_M" }}>
            With over 10 years of proven experience, WCS has become a trusted
            provider of end-to-end HR and staffing solutions across the global
            market. Our HR Services Division is designed to support dynamic
            workforce needs, offering HR management, policy development, compliance
            support, employee relations, and strategic workforce planning.
          </Typography>

          {/* VALUE SECTION */}
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: 4, mb: 2, fontFamily: "Medium_M" }}
          >
            How WCS HR Services Add Value
          </Typography>

          <ul style={{ lineHeight: "1.9", fontFamily: "Regular_M", paddingLeft: "20px" }}>
            <li>Flexible employee management solutions</li>
            <li>Improved process efficiency</li>
            <li>Reduced operational and overhead costs</li>
            <li>Workforce scalability and hiring flexibility</li>
            <li>Hassle-free HR and staffing operations</li>
            <li>Optimized manpower planning</li>
            <li>More time to focus on core business strategies</li>
          </ul>

          <Typography sx={{ mt: 4, lineHeight: 1.8, fontFamily: "Regular_M" }}>
            With professionalism, global exposure, and a people-first approach,
            WCS delivers reliable, comprehensive HR solutions that help
            organizations grow stronger and faster.
          </Typography>
                  <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mt: "30px !important", mb: 2, fontFamily: "Medium_M" }}
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
        </Box>

      </Box>
      
      <WebContactHome />
    </>
  );
};

export default WebOutsourcing;

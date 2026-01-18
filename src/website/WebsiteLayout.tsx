"use client";
import { Box } from "@mui/material";
import WebNavbar from "./home/WebNavbar";
import WebFooter from "./home/WebFooter";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./WebScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
import DeploymentLoader from "./DeploymentLoader";

const WebsiteLayout = () => {
  return (
    <>
        <DeploymentLoader />
        <ScrollToTop />
        <ScrollToTopButton />
        <Box sx={{background:"var(--newprimary)",minHeight:"100vh"}}>
            {/* <WebOffer /> */}
            <Box sx={{position:"sticky",top:"0px",zIndex:9,boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
              <WebNavbar />
            </Box>
            <Outlet />
            <WebFooter />
        </Box>
    </>
  );
};

export default WebsiteLayout;

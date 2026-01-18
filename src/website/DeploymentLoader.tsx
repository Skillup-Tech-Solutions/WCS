import { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const DeploymentLoader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 2000);
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} sx={{ color: "var(--primary)" }} />
      <Typography sx={{ mt: 2, color: "var(--primary)" }}>
      </Typography>
    </Box>
  );
};

export default DeploymentLoader;
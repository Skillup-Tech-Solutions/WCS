import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <Box sx={{ position: "fixed", bottom: 30, right: 30, zIndex: 1000 }}>
      <IconButton
        onClick={scrollToTop}
        sx={{
          width: 50,
          height: 50,
          backgroundColor: "var(--white)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          "&:hover": {
            backgroundColor: "var(--primary)",
            "& svg": { color: "var(--white)" },
          },
        }}
      >
        <svg width="50" height="50" style={{ position: "absolute", transform: "rotate(-90deg)" }}>
          <circle cx="25" cy="25" r="20" fill="none" stroke="#e0e0e0" strokeWidth="3" />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <KeyboardArrowUpIcon sx={{ color: "var(--primary)", zIndex: 1 }} />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
